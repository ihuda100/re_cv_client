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
      ) : error ? (<h1 className="text-center text-danger">{error}</h1>) : (
        <>
          <div className="container">
            <div style={{ textAlign: "center", justifyContent: "center" }}>
              <h1 className="my-4">My resumes</h1>
            </div>
            <div>
              <table className="w-75 m-auto table table-striped table-hover shadow-lg">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Titel</th>
                    <th>Date</th>
                    <th>Previwe</th>
                  </tr>
                </thead>
                <tbody>
                  {ar.map((resume, index) => {
                    return (
                      <tr key={index} className="align-middle table-row" onClick={() => toPreviwe(resume._id)}>
                        <td className="fw-semibold">{index + 1}</td>
                        <td>{resume?.type}</td>
                        <td className="text-muted">
                          {resume.dateCreated
                            ? resume.dateCreated.substring(10, length - 1)
                            : ""}
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => toPreviwe(resume._id)}
                          >
                            <i class="bi bi-arrow-right-short"></i>
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
