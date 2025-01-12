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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          ullam quasi, atque ipsa tenetur hic iure eius aliquid, quibusdam dolor
          eligendi libero nemo natus iste sed commodi! Explicabo suscipit
          dolorum sapiente quidem blanditiis, itaque aperiam? Ducimus sint autem
          numquam neque in quaerat vel nostrum assumenda earum aut veniam quasi
          molestias, nisi rerum error eveniet enim labore veritatis! Molestias
          cumque ut in optio! Tempora in vero cum ducimus corporis accusamus ad
          ab doloribus voluptates, animi pariatur amet laudantium dolores facere
          quibusdam eligendi ipsum similique asperiores, est temporibus. Velit
          magnam, autem, consequatur ut, quidem aspernatur repudiandae ad
          excepturi consequuntur eligendi accusamus illum? Vel, doloremque.
          Explicabo quas magnam minima nemo! Ut voluptates porro alias dicta
          distinctio reprehenderit, est animi aliquam quibusdam, quo, at
          mollitia ab laudantium soluta eos delectus iste cum enim facere quos
          consequatur omnis doloremque optio! Doloribus et explicabo placeat
          voluptatem sunt mollitia aspernatur, quam, eaque dignissimos nostrum
          dolor quos provident?
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
