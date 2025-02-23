import React, { useEffect } from "react";
import "./cv.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CVrender from "./CVrender";
import { API_URL, doApiMethod } from "../services/apiService";

const Form1 = () => {
  const location = useLocation();
  let { data } = location.state || {};
  let { index } = location.state || {};
  console.log(data);

  //arr= obj to arr, map arr and destracture .
  let arr = data[0].body;

  //pdf download
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    await doApi();
    const element = printRef.current;
    if (!element) {
      return;
    }
    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("examplepdf.pdf");
  };
  
  const doApi = async () => {
    let info = { template: index + 1, id: data[0]._id };
    console.log(info);
    let url = API_URL + "/resumes/template";
    try {
      let resp = await doApiMethod(url, "PATCH", info);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="center">
        <div className="border border-3">
          <div
            ref={printRef}
            className="d-flex flex-column"
            style={{ height: "1131.44px", width: "800px" }}
          >
            <div
              className="mb-4"
              style={{
                display: "flex",
                background: "#F2F8FA",
                height: "200px",
              }}
            >
              {/*Header */}
              <div
                className="ps-5"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  justifyContent: "center",
                }}
              >
                <h1>{data[0].fullName}</h1>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3">
                <ul className="list-unstyled">
                  {data[0].phone && (
                    <div className="d-flex">
                      <i className="bi bi-telephone-fill"></i>
                      <li className="ms-2">{data[0].phone}</li>
                    </div>
                  )}
                  {data[0].email && (
                    <div className="d-flex">
                      <i className="bi bi-envelope-at-fill"></i>
                      <li className="ms-2">{data[0].email}</li>
                    </div>
                  )}
                  {data[0].github && (
                    <div className="d-flex">
                      <i className="bi bi-github"></i>
                      <li className="ms-2">{data[0].github}</li>
                    </div>
                  )}
                  {data[0].linkdin && (
                    <div className="d-flex">
                      <i className="bi bi-linkedin"></i>
                      <li className="ms-2">{data[0].linkdin}</li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            {/* header end */}
            <div>
              <CVrender data={arr} />
            </div>

            <div style={{ flexGrow: 1 }}></div>
            <div style={{ background: "#F2F8FA", height: "60px" }}></div>
          </div>
        </div>
      </div>
      <div className="center" style={{ margin: "5px" }}>
        <button className="btn  border-black" onClick={handleDownloadPdf}>
          Download
        </button>
      </div>
    </>
  );
};

export default Form1;
