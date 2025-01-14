// import "./index.css";
// import cv1 from "./assets/cv1.jpg";
// import cv2 from "./assets/cv2.jpg";
// import cv3 from "./assets/cv3.jpg";
import React from 'react';
import { useLocation } from "react-router-dom";
import CV from "./CV";

/*
קומפווננט שהוא מציג דוגמאות לעיצובים , משתמש בקומפוננט שנקרא : 
CV.jsx

*/

const Template = () => {
    const location = useLocation();
    const { data } = location.state || {};
    console.log(data);
  //   let imgs = ["cv1", "cv2", "cv3"];
  // let imgs = [cv1, cv2, cv3];

  //   const imageGen = () =>
  //     imgs.map((el, i) => (
  //       <CV height={"300px"} width={"300px"} src={el} key={i + 1} />
  //     ));

  return (
    <>
      {/* <h1>
        <em>
          <u>Re:cv</u>
        </em>
      </h1>
      <div style={{ display: "flex", gap: "30px" }}>{imageGen()}</div> */}
    </>
  );
};

export default Template;
