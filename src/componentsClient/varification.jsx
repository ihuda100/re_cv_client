import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiMethod } from "../services/apiService";

const Varification = () => {
  let nav = useNavigate();
  const myEmail = useSelector((state) => state.myDetailsSlice.email);
  const [code, setCode] = useState(["", "", "", "", ""]);

  const handleChange = (event, index) => {
    const value = event.target.value;
    // רק מספרים מותרים והגבלת אורך לאות אחת
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      // מעבר אוטומטי לשדה הבא אם יש קלט
      if (value && index < 4) {
        document.getElementById(`input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    // מעבר לשדה הקודם בלחיצה על Backspace כשהשדה ריק
    if (event.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  // בדיקת תקינות האם כל השדות מולאו
  const isCodeComplete = code.every((digit) => digit !== "");

  const handleSubmit = () => {
    const codeString = code.join(""); // חיבור הערכים למחרוזת
    let _dataObg = {
      email: myEmail,
      verifictionCode: codeString,
    };
    doApi(_dataObg);
  };

  const doApi = async (_dataBody) => {
    console.log(_dataBody);
    let url = API_URL + "/users/verification";
    try {
      let resp = await doApiMethod(url, "PATCH", _dataBody);
      console.log(resp);
      if ((resp.data.status = 200)) {
        console.log("You are now a valid user");
        nav("/login");
      }
    } catch (err) {
      console.log(err.response.data);
      nav("/");
    }
  };

  // const sendAgain = () => {
  //   nav("/SignUp");
  // };

  return (
    <div className="align-content-center" style={{ height: "100vh" }}>
      <div
        className="rounded rounded-4 container mt-5 shadow-lg p-4 d-flex flex-column text-center"
        style={{ width: "80%", maxWidth: "500px", backgroundColor: "white" }}
      >
        <div className="row justify-content-center">
          <img
            className="mb-4"
            style={{ height: "20%", width: "50%" }}
            src="src/assets/logo.png"
            alt="logo"
          />
          <h1 className="">password verification</h1>

          <p className="text-center mb-4 mt-2">
            Enter the 4-digit security code we send to :{" "}
            <strong>{myEmail}</strong>
          </p>

          <div className="d-flex justify-content-center gap-2">
            {code.map((value, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                className="form-control text-center"
                style={{ width: "50px", fontSize: "24px" }}
                maxLength="1"
                value={value}
                onChange={(event) => handleChange(event, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              />
            ))}
          </div>

          <div className="text-center mt-3">
            <button
              className="btn border-black w-100"
              onClick={handleSubmit}
              disabled={!isCodeComplete}
            >
              Send
            </button>
          </div>
          {/* <p onClick={sendAgain} className='mt-2 text-danger '>Didn't get a code?</p> */}
        </div>
      </div>
    </div>
  );
};

export default Varification;
