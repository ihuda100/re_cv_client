import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addIfShowNav } from "../featuers/myDetailsSlice";
// import bgImage from "../assets/images.png";

const Welcome = () => {
  let nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addIfShowNav({ ifShowNav: false }));
  }, []);

  const toSignIn = () => {
    nav("/login");
  };
  const toSignUp = () => {
    nav("/SignUp");
  };

  return (
    <div
      className="container-fluid"
      style={{ minHeight: "100vh", color: "black" }}
    >
      <div
        style={{ height: "70px" }}
        className="container d-flex justify-content-between align-items-center"
      >
        <img
          height={60}
          // style={{ height: "20%", width: "50%" }}
          src="src/assets/logo.png"
          alt="logo"
        />
        <button onClick={toSignIn} className="btn border-black">
          Sign In
        </button>
      </div>
      <div className="container d-flex" style={{ minHeight: "90vh" }}>
        <div className="w-50 align-content-center justify-content-center p-5">
          {/* <div className="text-center p-3">
            <div className="p-4 h-75 align-content-center ">
              <h1>Create Your Professional Resume in 3 Easy Steps!</h1>
              <ul className="custom-list">
                <li>✅ Step 1: Upload Your Existing Resume or Start Fresh</li>
                <li>
                  ✍️ Step 2: Customize & Enhance with AI-Powered Suggestions
                </li>
                <li>
                  📄 Step 3: Choose a Template & Download Your Perfect Resume
                </li>
              </ul>
              <p>Start now and stand out in your job search!</p>
            </div>
            <button onClick={toSignUp} className="btn border-black m-3 w-50">
              Sign Up
            </button>
          </div> */}
          <h1 className="fw-bold mb-4" style={{ color: '#0A5EB0'}}>
            Create Your Professional Resume in 3 Easy Steps!
          </h1>

          <ul className="custom-list">
            <li>Upload Your Existing Resume or Start Fresh</li>
            <li>Customize & Enhance with AI-Powered Suggestions</li>
            <li>Choose a Template & Download Your Perfect Resume</li>
          </ul>

          <p className="mt-3 text-muted">
            Start now and stand out in your job search!
          </p>

          <button
            onClick={toSignUp}
            className="btn btn-primary mt-4 px-4 py-2 w-50"
          >
            Sign Up
          </button>
          {/* <div className="d-flex justify-content-center">
            <div
              className="p-4 shadow-sm text-center rounded rounded-4"
              style={{ width: "80%", color: "black" }}
            >
              <p>
                At Re:cv, we believe that your resume should work as hard as you
                do. Our AI-driven platform is designed to transform your
                experience and achievements into a compelling story that
                resonates with recruiters and hiring managers. We’re passionate
                about helping individuals unlock their full potential by
                delivering modern, professional resumes tailored to today’s job
                market. With our tools, you can focus on what matters
                most—taking the next step in your career journey.
              </p>
            </div>
          </div> */}
        </div>
        <div
          className="w-50 px-5 align-content-center justify-content-center text-center"
          // style={{background: `url(${bgImage}) no-repeat center center / cover`}}
        >
          <div className="p-4 shadow rounded rounded-4 h-75 align-content-center ">
            {/* <h1>Create Your Professional Resume in 3 Easy Steps!</h1>
            <ul className="custom-list">
              <li>✅ Step 1: Upload Your Existing Resume or Start Fresh</li>
              <li>
                ✍️ Step 2: Customize & Enhance with AI-Powered Suggestions
              </li>
              <li>
                📄 Step 3: Choose a Template & Download Your Perfect Resume
              </li>
            </ul>
            <p>Start now and stand out in your job search!</p> */}
          </div>
        </div>
        {/* <div
        className="d-flex justify-content-around p-5 m-3"
        style={{ height: "350px" }}
      >
        <div
          className="text-center p-3 w-50"
          // style={{ height: "100%", width: "40%" }}
        >
          <div className="m-3">
            <img
              style={{ height: "10%", width: "10%", borderRadius: "50px" }}
              src="src/assets/react.svg"
              alt="logo"
            />
          </div>
          <button
            onClick={toSignIn}
            className="btn border-black m-3 w-50"
          >
            Sign In
          </button>
          <button
            onClick={toSignUp}
            className="btn border-black m-3 w-50"
          >
            Sign Up
          </button>
        </div>

        <div className="px-4" style={{ height: "100%", width: "60%" }}>
          <div
            className="p-4 shadow-sm text-center"
            style={{ width: "80%", borderRadius: "px", color: "black" }}
          >
            <h3 className="py-2">About Us</h3>
            <p>
              At Re:cv, we believe that your resume should work as hard as you
              do. Our AI-driven platform is designed to transform your
              experience and achievements into a compelling story that resonates
              with recruiters and hiring managers. We’re passionate about
              helping individuals unlock their full potential by delivering
              modern, professional resumes tailored to today’s job market. With
              our tools, you can focus on what matters most—taking the next step
              in your career journey.
            </p>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Welcome;
