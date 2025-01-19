import React from "react";
import "./cv.css";
import { useLocation } from "react-router-dom";


const Form1 = () => {
  const location = useLocation();
  let { data } = location.state || {};
  console.log(data);
  
  return (
    <>
      <div className="container">
        <div style={{ display: "flex" }}>
          {/*Header */}
          <div style={{ background: "grey", width: "50%" }}>
            <h1>Name</h1>
            <h3>positon</h3>
          </div>
          <div>
            <ul>
              <li>phone</li>
              <li>address</li>
              <li>email</li>
            </ul>
          </div>
        </div>
        {/* header end */}
        <hr />
        <div className="flex11">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            vel, rerum, ipsa eligendi eos obcaecati nihil ea suscipit odio
            accusantium, et laboriosam repudiandae ut delectus necessitatibus
            temporibus voluptatem debitis quos.
          </p>
        </div>
        <hr />
        <div className="flex11">
          <div>
            <h2>Experience</h2>
          </div>
          <div>
            <h3>company name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, expedita eius repellendus vel exercitationem enim
              fuga, obcaecati aut rem est mollitia. Id asperiores eligendi ipsam
              illum debitis vero ipsa impedit.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex11">
          <div>
            <h2>Education</h2>
          </div>
          <div>
            <h3>university</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, expedita eius repellendus vel exercitationem enim
              fuga, obcaecati aut rem est mollitia. Id asperiores eligendi ipsam
              illum debitis vero ipsa impedit.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex12">
          <div>
            <h1>Language</h1>
            <ul>
              <li>Hebrew</li>
              <li>English</li>
              <li>Geramn</li>
            </ul>
          </div>
          <div>
            <h2>Expertise</h2>
          </div>
          <div>
            <h2>Refrence</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form1;
