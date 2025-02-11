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
          <h1 className="my-4">Review & Confirm Your Enhanced Resume ✅</h1>
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
          <input
            className="form-control"
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={info?.fullName}
            onChange={handleChange}
          />
          <input
            className="form-control"
            placeholder="Phone"
            type="number"
            name="phone"
            value={info?.phone}
            onChange={handleChange}
          />
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
            value={info?.email}
            onChange={handleChange}
          />
          <input
            className="form-control"
            placeholder="Linkdin"
            type="text"
            name="linkdin"
            value={info?.linkdin}
            onChange={handleChange}
          />
          <input
            className="form-control"
            placeholder="GitHub"
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
                  className="w-100 form-control"
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

        <div className="pt-2">
          <button onClick={sendToPDF} className="btn border-black">
            Verify your data
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyFinal;
