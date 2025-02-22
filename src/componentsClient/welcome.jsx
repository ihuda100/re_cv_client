import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addIfShowNav } from "../featuers/myDetailsSlice";
import img from "../assets/welcomeImg.jpeg";
import stock2 from "../assets/stock2.jpg";

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
        <img height={60} src="src/assets/logo.png" alt="logo" />
        <button onClick={toSignIn} className="btn border-black">
          Sign In
        </button>
      </div>
      <div className="container d-flex" style={{ minHeight: "90vh" }}>
        <div className="w-50 align-content-center justify-content-center p-5">
          <h1 className="fw-bold mb-4" style={{ color: "#0A5EB0" }}>
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
        </div>
        <div
          className="w-50 px-5 align-content-center justify-content-center text-center"
          // style={{background: `url(${bgImage}) no-repeat center center / cover`}}
        >
          <div
            style={{ position: "relative" }}
            className="shadow rounded rounded-4 h-75 align-content-center "
          >
            <img src={img} className="rounded rounded-4" alt="" height={"100%"} width={"100%"} />

            {/* <p
              className="fs-1"
              style={{
                position: "absolute",
                bottom: "10%",
                color: "#000000",
              }}
            >
              "Your Dream Job Starts with a Better CV!"
            </p> */}

            {/* div for img */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
