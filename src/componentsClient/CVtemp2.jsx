import React from "react";
import "./cv.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Balancer from "react-wrap-balancer";

const Form2 = () => {
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
        <div ref={printRef} className="container11" style={{ padding: "20px" }}>
          <div
            style={{ borderBottom: "5px solid green", flexDirection: "column" }}
            className="center"
          >
            <h1>{data.fullName}</h1>
            <h2>position</h2>
          </div>
          <div>
            <h2>professional summary</h2>
            <p>
              <Balancer>
                {" "}
                Bal Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                deserunt inventore voluptas voluptatibus porro dicta. Repellat
                vitae adipisci amet accusamus? Sit iure cupiditate corporis sed?
                Dolores saepe in voluptate? Accusamus?
              </Balancer>
            </p>
            <div className="flex12" style={{ margin: "10px", gap: "20px" }}>
              <h5>phone: {data.phone}</h5>
              <h5>email: {data.email}</h5>
              <h5>address</h5>
            </div>
          </div>
          <div>
            <p>
              <Balancer>{data.body}</Balancer>
            </p>
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
