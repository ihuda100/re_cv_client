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
      if(err.message == 'Network Error'){
        alert(err.message)
      }else{
        alert(err.response.data[0].message)
      }
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
        <h1 className="py-4">Complete Your Details to Build Your Perfect Resume ✍️</h1>
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
        <input className="form-control" type="text" placeholder="Full Name" id="fullName" required />
        <input className="form-control" type="text" placeholder="Phone" id="phone" required />
        <input className="form-control" type="email" placeholder="Email"  id="email" required />
        <input className="form-control" type="text" placeholder="Linkdin" id="linkdin" />
        <input className="form-control" type="text" placeholder="GitHub" id="gitHub" />
        <textarea className="form-control" type="text" placeholder="Education" id="education" required />
        <textarea className="form-control" type="text" placeholder="Work expirience" id="workExpirience" required />
        <textarea className="form-control" type="text" placeholder="Tell me about you" id="body" />
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
