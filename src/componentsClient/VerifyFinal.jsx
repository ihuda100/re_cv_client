import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doApiMethod, API_URL } from "../services/apiService";
import axios from "axios";

const VerifyFinal = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  const [info, setInfo] = useState(data);

  const sendToPDF = async () => {
    const url = API_URL + "/resumes/update";
    const res = await doApiMethod(url, "POST", info);
    console.log(res.data);
    nav("/template", { state: { data: info._id } });
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    if (name == "body") {
      setInfo((prevInfo) => {
        const updateBody = [...prevInfo.body];
        updateBody[i] = { ...updateBody[i], value };
        return { ...prevInfo, body: updateBody };
      });
    } else {
      setInfo({
        ...info,
        [name]: value,
      });
    }
  };

  return (
    <div style={{ height: "100vh" }}>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Details from your information</h1>
      </div>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "10px",
          width: "50%",
        }}
      >
        <label htmlFor=""> Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={info?.fullName}
          onChange={handleChange}
        />
        <label htmlFor="">Phone:</label>
        <input
          type="number"
          name="phone"
          value={info?.phone}
          onChange={handleChange}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={info?.email}
          onChange={handleChange}
        />
        <label htmlFor="">Linkdin:</label>
        <input
          type="text"
          name="linkdin"
          value={info?.linkdin}
          onChange={handleChange}
        />
        <label htmlFor="">GitHub:</label>
        <input
          type="text"
          name="gitHub"
          value={info?.gitHub}
          onChange={handleChange}
        />
        {info?.body.map((item, i) => {
          return (
            <div key={i} style={{ gap: "10px" }}>
              <label htmlFor="">{item?.key}</label>
              {/* <br /> */}
              <textarea
                className="w-100"
                rows={3}
                type="text"
                name="body"
                index={i}
                value={item?.value}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
          );
        })}
      </form>

      <div style={{ padding: "20px" }}>
        <button onClick={sendToPDF} className="btn border-black">
          Verify your data
        </button>
      </div>
    </div>
    </div>
  );
};

export default VerifyFinal;
