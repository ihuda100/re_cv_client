import React, { useState } from "react";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Help </h1>
      <div className="accordion" id="accordionExample">
        {/* שאלה 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${
                openIndex === 0 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(0)}
            >
              What is Re:cv and is it free ?
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              openIndex === 0 ? "show" : ""
            }`}
            aria-labelledby="headingOne"
          >
            <div className="accordion-body">
              Re:cv is AI powered service that generates and improves resumes to
              a professional level, the service is free!
            </div>
          </div>
        </div>

        {/* שאלה 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${
                openIndex === 1 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(1)}
            >
              I dont have a CV, can i still use Re:cv ?
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              openIndex === 1 ? "show" : ""
            }`}
            aria-labelledby="headingTwo"
          >
            <div className="accordion-body">
              Even if you don't have a resume you can enter your details and our
              AI powered APP will genrate a resume for you.
            </div>
          </div>
        </div>

        {/* שאלה 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${
                openIndex === 2 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(2)}
            >
              How Re:cv coollects my data ?
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              openIndex === 2 ? "show" : ""
            }`}
            aria-labelledby="headingThree"
          >
            <div className="accordion-body">
              Re:cv only collects what you provide for genrating or improving
              your Resume, we will never collect or store private information.
            </div>
          </div>
        </div>

        {/* שאלה 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className={`accordion-button ${
                openIndex === 3 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(3)}
            >
              Do i need to register ?
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              openIndex === 3 ? "show" : ""
            }`}
            aria-labelledby="headingFour"
          >
            <div className="accordion-body">
              Yes , it's requirded one time regestration, it's quick, easy and
              secure.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
