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
  const [error, setError] = useState(null);
  const [imgs, setImgs] = useState([cv0, cv1, cv2, cv3]);
  const [startIndex, setStartIndex] = useState(0); // מצביע על התמונה הראשונה מתוך ה-3 שיופיעו

  let { data } = location.state || {};
  data = { id: data };

  const openImg = async (i) => {
    setError(null);
    try {
      const url = API_URL + "/resumes/getinfo";
      const res = await doApiMethod(url, "POST", data);
      //const actualIndex = (startIndex + i) % imgs.length;
      nav(`/cvtemp${(startIndex + i) % imgs.length}`, {
        state: { data: [res.data], index: (startIndex + i) % imgs.length },
      });
    } catch (error) {
      console.log(error)
      if (error.message == "Network Error") {
        setError(error.message);
      } else {
        setError(error.response.data.message);
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
        height={"450px"}
        width={"360px"}
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
        <h1 className="my-5">Choose your desired resume template</h1>
      </div>
      <div className="center">
        <div className="buttons-container w-100">
          <button onClick={toTheLeft} className="nav-button p-4 opacity-50">
            <FaArrowLeft />
          </button>
          <div className="images-container w-100">{imageGen()}</div>
          <button onClick={toTheRight} className="nav-button p-4 opacity-50">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <h1 className="text-danger text-center p-3">{error}</h1>
    </>
  );
};

export default Template;
