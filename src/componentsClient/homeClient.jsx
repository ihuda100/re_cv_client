import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiGet, doApiMethod } from "../services/apiService";
import { addIfShowNav, addIsAdmin, addName } from "../featuers/myDetailsSlice";

const HomeClient = () => {
  const myName = useSelector((state) => state.myDetailsSlice.name);
  const IsAdmin = useSelector((state) => state.myDetailsSlice.isAdmin);
  const nav = useNavigate();
  const [myInfo, setmyInfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addIfShowNav({ ifShowNav: true }));
    console.log(myName);

    doApi();
  }, []);

  const doApi = async () => {
    let url = API_URL + "/users/myInfo";
    try {
      let data = await doApiGet(url);
      setmyInfo(data.data);
      dispatch(addName({ name: data.data.FirstName }));
      if (data.data.role == "admin") {
        dispatch(addIsAdmin({ isAdmin: true }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toUpload = () => {
    nav("/upload");
  };

  const toForm = () => {
    nav("/form");
  };

  return (
    <div
      className="container text-center"
      style={{ height: "100vh", padding: "20px" }}
    >
      <h1 className="mb-4">
        Welcome {myName} {myInfo.LastName}
      </h1>
      <div className="shadow-lg w-50 m-auto p-4 bg-white rounded-4">
        <p className="m-0">
          Welcome to Re:cv, where innovation meets career growth. Our mission is
          to empower job seekers and professionals by upgrading their resumes
          with the power of AI. We combine cutting-edge technology with industry
          insights to craft personalized, impactful resumes that stand out in
          today’s competitive job market. Whether you're just starting your
          career or aiming for the next big opportunity, we're here to help you
          showcase your skills and accomplishments with clarity and confidence.
          Let us help you open the door to your dream job.
        </p>
      </div>
      <div className="w-50 d-flex justify-content-around m-auto mt-5">
        <button onClick={toUpload} className="btn btn-success">
          I have CV to upgrade
        </button>
        <button onClick={toForm} className="btn btn-success">
          I want create CV
        </button>
      </div>
    </div>
  );
};

export default HomeClient;
