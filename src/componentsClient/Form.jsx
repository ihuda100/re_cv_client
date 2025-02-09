import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doApiMethod, API_URL } from "../services/apiService";
import gif from "../assets/gif-loading.webp";

const Form = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendDataForUpgrade = async () => {
    setLoading(true);
    let data = {
      fullName: document.querySelector("#fullName").value,
      phone: document.querySelector("#phone").value,
      email: document.querySelector("#email").value,
      linkdin: document.querySelector("#linkdin").value,
      gitHub: document.querySelector("#gitHub").value,
      body: {
        education: document.querySelector("#education").value,
        workExpirience: document.querySelector("#workExpirience").value,
        freeWords: document.querySelector("#body").value,
      },
    };
    let url = API_URL + "/resumes/upgrade";
    try {
      const res = await doApiMethod(url, "POST", data);
      console.log("!הטופס נשלח בהצלחה", res.data);
      nav("/verify", { state: { data: res.data } });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
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
        <h1>Please tell me about you</h1>
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
        <label htmlFor="">Full Name:</label>
        <input type="text" id="fullName" required />
        <label htmlFor="">Phone:</label>
        <input type="text" id="phone" required />
        <label htmlFor="">Email:</label>
        <input type="email" id="email" required />
        <label htmlFor="">Linkdin:</label>
        <input type="text" id="linkdin" />
        <label htmlFor="">GitHub:</label>
        <input type="text" id="gitHub" />
        <label htmlFor="">Education:</label>
        <textarea type="text" id="education" required />
        <label htmlFor="">Work expirience:</label>
        <textarea type="text" id="workExpirience" required />
        <label htmlFor="">Tell me about you</label>
        <textarea type="text" id="body" />
      </form>
      <div style={{ padding: "20px" }}>
        <button className="btn border-black" onClick={sendDataForUpgrade}>
          Submit
        </button>
      </div>
      <div>{loading && <img src={gif} alt="loading" width={50} />}</div>
    </div>
  );
};

export default Form;
