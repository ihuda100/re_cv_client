import "./form.css";

import React from "react";

const Form3 = () => {
  return (
    <>
      <div className="container">
        <div style={{ background: "#C4D9FF" }}>
          <h1>name</h1>
          <h2>occupation</h2>
        </div>
        <div className="flex12">
          <div style={{ background: "#C4D9FF", width: "50%" }}>
            <h3>Profile:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, accusamus reiciendis officiis pariatur consequatur
              praesentium eos odio in vitae rem nostrum unde, quisquam dolore
              autem ducimus, dignissimos maiores architecto delectus!
            </p>
            <h3>contact me:</h3>
          </div>
          <div>
            <h3>Education:</h3>
            <h3>Language:</h3>
            <h3>Skills:</h3>
            <h3>Experience:</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form3;
