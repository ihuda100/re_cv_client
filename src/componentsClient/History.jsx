import React, { useEffect, useState } from "react";
import { API_URL, doApiGet } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import gif from "../assets/gif-loading.webp";

function History() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ar, setAr] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    doApiAllResumes();
  }, []);

  const doApiAllResumes = async () => {
    let url = API_URL + "/resumes/history";
    try {
      let data = await doApiGet(url);
      setLoading(false);
      console.log(data.data);
      setAr(data.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response.data.error);
    }
  };

  const toPreviwe = (id) => {
    console.log(id);
    nav("/template", { state: { data: id } });
  };

  return (
    <>
      {loading ? (
        <div className="text-center p-3">
          <img src={gif} alt="loading" width={50} />
        </div>
      ) : error ? (<h1 className="pt-4 text-center text-danger">{error}</h1>) : (
        <>
          <div className="container">
            <div style={{ textAlign: "center", justifyContent: "center" }}>
              <h1>Youre resumes</h1>
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
        </>
      )}
    </>
  );
}

export default History;
