import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [file, setFile] = useState(null);
  let nav = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file); // handle file from upload
  };
  const sendFile = () => {
    console.log(file);
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
    </div>
  );
};

export default Upload;
