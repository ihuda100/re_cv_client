import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../services/apiService";
import gif from '../assets/gif-loading.webp'

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
    console.log(file);
    if (!file) {
      alert("select file please!");
      setLoading(false);
      return;
    }
    // צריך סינון של קיבצי PDF בלבד 
    const formData = new FormData();
    formData.append("file", file);
    try {
      let url = API_URL + "/resumes/convert"
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("הקובץ הועלה בהצלחה:", response.data);
      nav('/verifydata',{ state: { fileInfo: response.data } })
    } catch (error) {
      console.error("שגיאה בהעלאת הקובץ:", error);
    }
  };

  return (
    <div className="mt-5 text-center">
      <input
        onChange={handleFileChange}
        className="border rounded-1"
        type="file"
      />
      <br />
      <button onClick={sendFile} className="mt-2 btn btn-dark">
        upload
      </button>
      <br />
      {loading && (<img src={gif} alt="loading" width={50}/>)}
    </div>
  );
};

export default Upload;
