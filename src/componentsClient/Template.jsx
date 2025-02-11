import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./cv.css";
import cv1 from "../assets/cvImages/cv1.jpg";
import cv2 from "../assets/cvImages/cv2.jpg";
import cv3 from "../assets/cvImages/cv3.jpg";
import cv0 from "../assets/cvImages/cv0.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import CV from "./CV";
import { doApiMethod, API_URL } from "../services/apiService";

const Template = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [verify, setVerify] = useState(true);
  const [imgs, setImgs] = useState([cv0, cv1, cv2, cv3]);
  const [startIndex, setStartIndex] = useState(0); // מצביע על התמונה הראשונה מתוך ה-3 שיופיעו

  let { data } = location.state || {};
  data = { id: data };

  const openImg = async (i) => {
    try {
      const url = API_URL + "/resumes/getinfo";
      const res = await doApiMethod(url, "POST", data);
      //const actualIndex = (startIndex + i) % imgs.length;
      nav(`/cvtemp${(startIndex + i) % imgs.length}`, {
        state: { data: [res.data] },
      });
    } catch (error) {
      if (error.response.data.message === "Please verify you resumes") {
        setVerify(false);
      }
    }
  };

  // מחזיר את 3 התמונות הנוכחיות
  const getDisplayedImages = () => {
    return [
      imgs[startIndex % imgs.length],
      imgs[(startIndex + 1) % imgs.length],
      imgs[(startIndex + 2) % imgs.length],
    ];
  };

  const imageGen = () =>
    getDisplayedImages().map((el, i) => (
      <CV
        height={"500px"}
        width={"400px"}
        src={el}
        onClick={() => openImg(i)}
        key={i}
      />
    ));

  // מעבר ימינה – מגדיל את האינדקס כך שהתמונות יזוזו קדימה
  const toTheRight = () => {
    setStartIndex((prev) => (prev + 1) % imgs.length);
  };

  // מעבר שמאלה – מקטין את האינדקס כך שהתמונות יזוזו אחורה
  const toTheLeft = () => {
    setStartIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <>
      <div className="center">
        <h1 className="my-4">"Choose the perfect resume template and take the next step in your career! 🚀</h1>
        {/* <h1 className="my-4">
          <em>
            <u>Choose the perfect resume template</u>
          </em>
        </h1> */}
      </div>
      <div className="center">
        <div className="buttons-container">
          <button onClick={toTheLeft} className="nav-button">
            <FaArrowLeft />
          </button>
          <div className="images-container">{imageGen()}</div>
          <button onClick={toTheRight} className="nav-button">
            <FaArrowRight />
          </button>
        </div>
      </div>
      {!verify && (
        <h1 className="text-danger text-center p-3">
          Please verify your resumes
        </h1>
      )}
    </>
  );
};

export default Template;
