import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../services/apiService";
import gif from "../assets/gif-loading.webp";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  let nav = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file); // handle file from upload
  };
  const sendFile = async () => {
    setLoading(true);
    if (!file) {
      alert("select file please!");
      setLoading(false);
      return;
    }
    // צריך סינון של קיבצי PDF בלבד
    const formData = new FormData();
    formData.append("file", file);
    try {
      let url = API_URL + "/resumes/convert";
      const response = await axios.post(url, formData, {
        headers: {
          "x-api-key": localStorage["start_react_token"],
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("הקובץ הועלה בהצלחה:", response.data);
      nav("/verify", { state: { data: response.data } });
    } catch (error) {
      setLoading(false);
      if (error.message == "Network Error") {
        alert(error.message);
      } else {
        alert(error.response.data.message)
      }
      console.error("שגיאה בהעלאת הקובץ:", error);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="text-center">
        <h1 className="my-4">Upload Your Resume to Get Started</h1>
        <input
          onChange={handleFileChange}
          class="form-control form-control-lg w-25 m-auto"
          id="formFileLg"
          type="file"
        />
        <br />
        <button onClick={sendFile} className="btn border-black">
          upload
        </button>
        <br />
        {loading && <img src={gif} alt="loading" width={50} />}
      </div>
    </div>
  );
};

export default Upload;
