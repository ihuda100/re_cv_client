import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiGet, doApiMethod } from "../services/apiService";
import { addIfShowNav, addIsAdmin, addName } from "../featuers/myDetailsSlice";
import cvimg from "../assets/cvimg.jpg";
const HomeClient = () => {
  const myName = useSelector((state) => state.myDetailsSlice.name);
  const IsAdmin = useSelector((state) => state.myDetailsSlice.isAdmin);
  const nav = useNavigate();
  const [myInfo, setmyInfo] = useState({});
  const dispatch = useDispatch();
  const [hover, Sethover] = useState(false);
  const [hover2, Sethover2] = useState(false);

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

  const onHover = () => {
    hover ? Sethover(false) : Sethover(true);
  };

  const onHover2 = () => {
    hover2 ? Sethover2(false) : Sethover2(true);
  };

  return (
    <div
      className="container text-center d-flex justify-content-center align-items-center flex-column mt-2"
      style={{ height: "80%", padding: "20px" }}
    >
      <h1 className="mb-4">
        Welcome {myName} {myInfo.LastName}
      </h1>
      <div className="shadow-lg w-50  p-4 bg-white rounded-4 mb-5">
        <img src={cvimg} alt="" width={350} height={350} />
      </div>
      <div className="w-50 d-flex justify-content-around ">
        <button
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          onClick={toUpload}
          className="btn border-black"
          style={{
            background: hover ? "#0A5EB0" : "",
            color: hover ? "white" : "",
          }}
        >
          I have CV to upgrade
        </button>
        <button
          onMouseEnter={onHover2}
          onMouseLeave={onHover2}
          onClick={toForm}
          className="btn border-black"
          style={{
            background: hover ? "#0A5EB0" : "",
            color: hover ? "white" : "",
          }}
        >
          I want create CV
        </button>
      </div>
    </div>
  );
};

export default HomeClient;
