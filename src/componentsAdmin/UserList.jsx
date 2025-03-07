import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";
import { useLocation, useNavigate } from "react-router-dom";
import gif from "../assets/gif-loading.webp";

function UserList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ar, setAr] = useState([]);
  const ThisID = useSelector((state) => state.myDetailsSlice.idMorInfoAdmin);
  const [thisUser, setThisUser] = useState([]);
  const nav = useNavigate();
  const location = useLocation();
  let { id } = location.state || {};
  // console.log(id);
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = API_URL + "/users/single/" + id;
    try {
      let data = await doApiGet(url);
      setThisUser(data.data);
      doApiAllResumes();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const doApiAllResumes = async () => {
    let url = API_URL + "/resumes/userlist/" + id;
    try {
      let data = await doApiGet(url);
      console.log(data.data);
      setAr(data.data);
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  const toPreviwe = (id) => {
    nav("/admin/previwe", { state: { data: id } });
  };

  return (
    <div style={{ height: "100vh" }}>
      {loading ? (
        <div className="text-center p-3">
          <img src={gif} alt="loading" width={50} />
        </div>
      ) : error ? (
        <p className="text-center text-danger m-5 h3">{error}</p>
      ) : (
        <>
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
                    <th>Preview</th>
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
        </>
      )}
    </div>
  );
}

export default UserList;
