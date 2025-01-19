import React from "react";
import "./cv.css";
import cv1 from "../assets/cvImages/cv1.jpg";
import cv2 from "../assets/cvImages/cv2.jpg";
import cv3 from "../assets/cvImages/cv3.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import CV from "./CV";
import CVtemp1 from "./CVtemp1";
import { doApiMethod, API_URL } from "../services/apiService";
/*
קומפווננט שהוא מציג דוגמאות לעיצובים , משתמש בקומפוננט שנקרא : 
CV.jsx

*/

const Template = () => {
  const nav = useNavigate();
  const location = useLocation();
  let { data } = location.state || {};
  data = {
    id: data,
  };

  console.log(data);

  let imgs = [cv1, cv2, cv3];

  const openImg = async (i) => {
    const url = API_URL + "/resumes/getinfo";
    const res = await doApiMethod(url, "POST", data);

    nav(`/cvtemp${i}`, { state: { data: res.data } });
  };

  const imageGen = () =>
    imgs.map((el, i) => (
      <CV
        height={"350px"}
        width={"300px"}
        src={el}
        onClick={(e) => {
          openImg(i + 1);
        }}
        key={i + 1}
      />
    ));

  return (
    <>
      <div className="center">
        <h1>
          <em>
            <u>Re:cv</u>
          </em>
        </h1>
      </div>
      <div className="center">
        <div>
          <div
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            {imageGen()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
