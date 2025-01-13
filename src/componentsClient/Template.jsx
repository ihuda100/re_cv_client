import "./cv.css";
import cv1 from "../assets/cvImages/cv1.jpg";
import cv2 from "../assets/cvImages/cv2.jpg";
import cv3 from "../assets/cvImages/cv3.jpg";
import CV from "./CV";
import CVtemp1 from "./CVtemp1";
/*
קומפווננט שהוא מציג דוגמאות לעיצובים , משתמש בקומפוננט שנקרא : 
CV.jsx

*/

const Template = () => {
  let imgs = [cv1, cv2, cv3];

  const imageGen = () =>
    imgs.map((el, i) => (
      <CV height={"300px"} width={"300px"} src={el} key={i + 1} />
    ));
  //

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
