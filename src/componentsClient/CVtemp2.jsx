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
          <div ref={printRef}>
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
              <h2 className="cvColor">professional summary:</h2>
              <p>
                <Balancer> {sum}</Balancer>
              </p>
              <div className="flex12" style={{ margin: "10px", gap: "20px" }}>
                <h5 className="headGreen">Phone: {data[0].phone}</h5>
                <h5 className="headGreen">Email: {data[0].email}</h5>
              </div>
            </div>
            <div>
              <h2 className="cvColor">Education:</h2>
              <p>
                <Balancer>{education}</Balancer>
              </p>
            </div>
            <div>
              <h2 className="cvColor">Work Experience:</h2>
              <p>
                <Balancer>{workExp}</Balancer>
              </p>
            </div>
            <div>
              <h2 className="cvColor">Skills:</h2>
              <p>
                <Balancer>{skills}</Balancer>
              </p>
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
