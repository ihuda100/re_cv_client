import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyFinal = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const [info, setInfo] = useState(data);

  const sendToPDF = () => {
    console.log(information);
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
        height: "600px",
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
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "10px",
        }}
      >
        <label htmlFor=""> Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={info.fullName}
          onChange={handleChange}
        />
        <label htmlFor="">ID number:</label>
        <input
          type="number"
          name="id"
          value={info.id}
          onChange={handleChange}
        />
        <label htmlFor="">Phone:</label>
        <input
          type="number"
          name="phone"
          value={info.phone}
          onChange={handleChange}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={info.email}
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
