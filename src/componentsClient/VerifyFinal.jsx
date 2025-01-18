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
    const url = API_URL + '/resumes/update'
    const res = await doApiMethod(url, 'POST', info);
    console.log(res.data)
     nav("/template", {state: {data: info._id}})
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    console.log(value);
    console.log(info);
  };
  return (
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
        // onSubmit={sendToPDF}
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
        <label htmlFor="">Body</label>
        <textarea
          rows={5}
          type="text"
          name="body"
          value={info?.body}
          onChange={handleChange}
        />
      </form>

      <div style={{ padding: "20px" }}>
        <button onClick={sendToPDF} className="btn btn-success">
          Verify your data
        </button>
      </div>
    </div>
  );
};

export default VerifyFinal;
