import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const nav = useNavigate();
  let data = {
    fullName: "",
    id: "",
    phone: "",
    email: "",
  };

  const formData = async () => {
    data.fullName = document.querySelector("#fullName").value;
    data.id = document.querySelector("#IDnum").value;
    data.phone = document.querySelector("#PhoneNumber").value;
    data.email = document.querySelector("#email").value;
     nav("/verifyfinal", { state: { data: data } });
  };

  return (
    <>
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
          <h1>Re:CV</h1>
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
          <label htmlFor="">Full Name:</label>
          <input type="text" id="fullName" required />
          <label htmlFor="">ID number:</label>
          <input type="number" id="IDnum" />
          <label htmlFor="">Phone:</label>
          <input type="number" id="PhoneNumber" required />
          <label htmlFor="">Email:</label>
          <input type="email" id="email" required />
        </form>
        <div style={{ padding: "20px" }}>
          <button onClick={formData}>Submit</button>
        </div>
        <div>
          <h2>Fill you details</h2>
        </div>
      </div>
    </>
  );
};

export default Form;
