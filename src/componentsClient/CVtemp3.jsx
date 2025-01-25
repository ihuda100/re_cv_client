import React from "react";
import "./cv.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Balancer from "react-wrap-balancer";

const Form3 = () => {
  const location = useLocation();
  let { data } = location.state || {};
  console.log(data);

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
        <div ref={printRef} className="container11">
          <div style={{ background: "#C4D9FF", padding: "10px" }}>
            <h1>{data.fullName}</h1>
            <h2>occupation</h2>
          </div>
          <div className="flex12">
            <div style={{ background: "#C4D9FF", width: "50%" }}>
              <h3>Profile:</h3>
              <Balancer>
                <p>{data.body}</p>
              </Balancer>
              <h3>contact me:</h3>
              <p>Phone: {data.phone}</p>
              <p>Emial: {data.email}</p>
            </div>
            <div>
              <h3>Education:</h3>
              <h3>Language:</h3>
              <h3>Skills:</h3>
              <h3>Experience:</h3>
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

export default Form3;
