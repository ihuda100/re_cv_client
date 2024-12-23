import React from "react";

const Form = () => {
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
          <h1>Re:cv</h1>
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
          <label htmlFor="">First Name:</label>
          <input type="text" />
          <label htmlFor=""> Last Name:</label>
          <input type="text" />
          <label htmlFor="">ID number:</label>
          <input type="number" />
          <label htmlFor="">Phone:</label>
          <input type="number" />
          <label htmlFor="">Email:</label>
          <input type="email" required />
        </form>
        <div style={{ padding: "20px" }}>
          <button>Submit</button>
        </div>
        <div>
          <h2>Fill you details</h2>
        </div>
      </div>
    </>
  );
};

export default Form;
