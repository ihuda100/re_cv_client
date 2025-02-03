import React, { useEffect } from "react";
import "./cv.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CVrender from "./CVrender";

const Form1 = () => {
  const location = useLocation();
  let { data } = location.state || {};
  console.log(data);
  console.log(data[0].body[0]);

  //arr= obj to arr, map arr and destracture .

  let arr = data[0].body;
  console.log(arr);

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
        <div className="container11" style={{ width: "40%" }}>
          <div ref={printRef} style={{ padding: "20px" }}>
            <div style={{ display: "flex" }}>
              {/*Header */}
              <div style={{ background: "grey", width: "50%" }}>
                <h1>{data[0].fullName}</h1>
                <h3>positon</h3>
              </div>
              <div>
                <ul>
                  <li>{data[0].phone}</li>

                  <li>{data[0].email}</li>
                </ul>
              </div>
            </div>
            {/* header end */}
            <CVrender data={arr} />
          </div>
        </div>
      </div>
      <div className="center" style={{ margin: "5px" }}>
        <button className="btn btn-dark " onClick={handleDownloadPdf}>
          Download
        </button>
      </div>
    </>
  );
};

export default Form1;
