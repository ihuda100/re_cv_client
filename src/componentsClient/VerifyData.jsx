import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyData = () => {
  const location = useLocation();
  const { fileInfo } = location.state || {};
  const [information, setInformation] = useState(fileInfo?.personal_information);
  console.log(fileInfo);
  const sendToPDF = () => {
    console.log(information);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformation({
      ...information,
      [name]: value,
    });
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
          width: "50%",
        }}
      >
        <label htmlFor=""> Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={information?.fullName}
          onChange={handleChange}
        />
        <label htmlFor="">Phone:</label>
        <input
          type="number"
          name="phone"
          value={information?.phone}
          onChange={handleChange}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={information.email}
          onChange={handleChange}
        />
        <label htmlFor="">Linkdin:</label>
        <input
          type="text"
          name="linkdin"
          value={information.linkdin}
          onChange={handleChange}
        />
        <label htmlFor="">GitHub:</label>
        <input
          type="text"
          name="gitHub"
          value={information.gitHub}
          onChange={handleChange}
        />
        <label htmlFor="">Body:</label>
        <input
        style={{ overflowY: "auto"}}
        
          type="text"
          name="body"
          value={information.identity}
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

export default VerifyData;
