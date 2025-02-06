import React from "react";
import "./cv.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Balancer from "react-wrap-balancer";
import CVrender from "./CVrender";

const Form2 = () => {
  const location = useLocation();
  let { data } = location.state || {};
  console.log(data);

  //arr= obj to arr, map arr and destracture .

  let arr = data[0].body;

  const data11 = arr.map((el) => el.value);

  const [education, workExp, skills, sum] = data11;

  //pdf download
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
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

  return (
    <>
      <div className="center">
        <div className="container11" style={{ padding: "50px" }}>
          <div ref={printRef} style={{ height: "1131.44px", width: "800px" }}>
            <div
              style={{
                borderBottom: "5px solid green",
                flexDirection: "column",
              }}
              className="center"
            >
              <h1>{data[0].fullName}</h1>
            </div>
            <div>
              <h2 className="cvColor">Contact:</h2>

              <div className="d-flex flex-column justify-content-center ps-3">
                <ul className="list-unstyled">
                  {data[0].phone && (
                    <div className="d-flex">
                      <i class="bi bi-telephone-fill"></i>
                      <li className="ms-2">{data[0].phone}</li>
                    </div>
                  )}
                  {data[0].email && (
                    <div className="d-flex">
                      <i class="bi bi-envelope-at-fill"></i>
                      <li className="ms-2">{data[0].email}</li>
                    </div>
                  )}
                  {data[0].github && (
                    <div className="d-flex">
                      <i class="bi bi-github"></i>
                      <li className="ms-2">{data[0].github}</li>
                    </div>
                  )}
                  {data[0].linkdin && (
                    <div className="d-flex">
                      <i class="bi bi-linkedin"></i>
                      <li className="ms-2">{data[0].linkdin}</li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div>
              <CVrender data={arr} _color={"#77b254"} />
            </div>
          </div>
        </div>
      </div>
      <div className="center" style={{ margin: "5px" }}>
        <button onClick={handleDownloadPdf}>Download</button>
      </div>
    </>
  );
};

export default Form2;
