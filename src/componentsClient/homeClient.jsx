import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiGet, doApiMethod } from "../services/apiService";
import { addIfShowNav, addIsAdmin, addName } from "../featuers/myDetailsSlice";
import cvimg from "../assets/cvimg.jpg";
import { Italic, Sparkles } from "lucide-react";
import { CloudUpload } from "lucide-react";
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
      className="text-center d-flex justify-content-center align-items-center flex-column pb-5"
      style={{ background: '#F7F7F7' }}
    >
      <h1 className="my-4">
        Welcome {myName} {myInfo.LastName}
      </h1>
      <div className=" w-50  p-4 ">
        <img className="p-5" src={cvimg} alt="" />
        <h2 className="m-2">
          Build a CV that <span className="fst-italic"> gets you noticed</span>
        </h2>
        <p className="text-muted">
          Easily craft a professional CV or import your existing one <br /> to
          make a lasting impression
        </p>
      </div>

      <div className="w-50 d-flex justify-content-around pb-4">
        <button
          onMouseEnter={onHover2}
          onMouseLeave={onHover2}
          onClick={toForm}
          className="btn border-black"
          style={{
            background: hover2 ? "#0A5EB0" : "",
            color: hover2 ? "white" : "",
          }}
        >
          <Sparkles className="me-3" />
          Create a new CV
        </button>
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
          <CloudUpload className="me-3" />
          Upload my CV
        </button>
      </div>
    </div>
  );
};

export default HomeClient;
