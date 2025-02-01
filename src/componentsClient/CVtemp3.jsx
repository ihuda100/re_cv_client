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
        <div className="container11">
          <div ref={printRef}>
            <div
              style={{ background: "#C4D9FF", padding: "10px", width: "100%" }}
              className="center"
            >
              <h1>{data[0].fullName}</h1>
            </div>
            <div className="flex12">
              <div style={{ background: "#C4D9FF", width: "50%" }}>
                <h3>Profile:</h3>

                <h3>contact me:</h3>
                <p>Phone: {data[0].phone}</p>
                <p>Email: {data[0].email}</p>
              </div>
              <div>
                <div>
                  {" "}
                  <h3>Education:</h3>
                  <Balancer>
                    {" "}
                    <p>{education}</p>
                  </Balancer>
                </div>
                <div>
                  {" "}
                  <h3>Skills:</h3>
                  <Balancer>
                    {" "}
                    <p>{skills}</p>
                  </Balancer>
                </div>
                <div>
                  <h3>Experience:</h3>
                  <Balancer>
                    {" "}
                    <p>{workExp}</p>
                  </Balancer>
                </div>
              </div>
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
