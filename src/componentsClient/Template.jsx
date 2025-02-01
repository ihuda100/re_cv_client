import React from "react";
import "./cv.css";
import cv1 from "../assets/cvImages/cv1.jpg";
import cv2 from "../assets/cvImages/cv2.jpg";
import cv3 from "../assets/cvImages/cv3.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import CV from "./CV";
import { doApiMethod, API_URL } from "../services/apiService";

/*
קומפווננט שהוא מציג דוגמאות לעיצובים , משתמש בקומפוננט שנקרא : 
CV.jsx

*/

//Test data id: "67914ed1ef1260518ad298a9"

const Template = () => {
  const nav = useNavigate();
  const location = useLocation();
  let { data } = location.state || {};
  data = {
    id: data,
  };

  let imgs = [cv1, cv2, cv3];

  const openImg = async (i) => {
    const url = API_URL + "/resumes/getinfo";
    const res = await doApiMethod(url, "POST", data);

    nav(`/cvtemp${i + 1}`, { state: { data: [res.data] } });
    console.log(i);
  };

  const imageGen = () =>
    imgs.map((el, i) => (
      <CV
        height={"350px"}
        width={"300px"}
        src={el}
        onClick={() => {
          openImg(i);
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
