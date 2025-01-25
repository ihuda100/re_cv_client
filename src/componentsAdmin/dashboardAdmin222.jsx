import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";
import { useNavigate } from "react-router-dom";

function DashboardAdmin222() {
  const initialUsers = [
    {
      id: 1,
      tate: "William Justice",
      time: "Davis",
      level: "hvusa",
    },
    {
      id: 2,
      tate: "William Justice",
      time: "Davis",
      level: "hvusa",
    },
  ];

  let [ar, setAr] = useState(initialUsers);
  const ThisID = useSelector((state) => state.myDetailsSlice.idMorInfoAdmin);
  const [thisUser, setThisUser] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = API_URL + "/users/single/" + ThisID;
    try {
      let data = await doApiGet(url);
      // console.log(data.data);
      setThisUser(data.data);
      doApiAllResumes();
    } catch (error) {
      console.log(error);
    }
  };

  const doApiAllResumes = async () => {
    let url = API_URL + "/resumes/" + ThisID;
    try {
      let data = await doApiGet(url);
      console.log(data.data);
      setAr(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toPreviwe = (id) => {
    nav('/admin/previwe',{state: {data: id}});
  }

  return (
    <div className="container">
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <h1>user details</h1>
        <h4>Name :{thisUser.FirstName}</h4>
      </div>

      <div>
        <table className="w-50 m-auto table table-striped shadow-lg">
          <thead>
            <tr>
              <th>List</th>
              <th>Date</th>
              <th>Previwe</th>
            </tr>
          </thead>
          <tbody>
            {ar.map((resume, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {resume.dateCreated
                      ? resume.dateCreated.substring(10, length - 1)
                      : ""}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => toPreviwe(resume._id)}
                    >
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardAdmin222;
