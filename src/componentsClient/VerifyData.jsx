import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyData = () => {
  const location = useLocation();
  const { fileInfo } = location.state || {};  
  const [information, setInformation] = useState(fileInfo.personal_information);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setInformation({
        ...information,
        [name]: value,
    })
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
        <h1>Details from your CV</h1>
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
          name="full_name"
          value={information.full_name}
          onChange={handleChange}
        />
        <label htmlFor="">ID number:</label>
        <input
          type="number"
          name="identity"
          value={information.identity}
          onChange={handleChange}
        />
        <label htmlFor="">Phone:</label>
        <input
          type="number"
          name="mobile"
          value={information.mobile}
          onChange={handleChange}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={information.email}
          onChange={handleChange}
        />
      </form>
      <div style={{ padding: "20px" }}>
        <button className="btn btn-success">Verify your data</button>
      </div>
    </div>
  );
};

export default VerifyData;
