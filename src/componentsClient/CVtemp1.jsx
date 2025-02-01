import React from "react";
import "./cv.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Balancer from "react-wrap-balancer";

const Form1 = () => {
  const location = useLocation();
  let { data } = location.state || {};
  console.log(data);
  console.log(data[0].body[0]);

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
        <div ref={printRef} className="container11">
          <div ref={printRef}>
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
            <hr />
            <div className="flex11">
              <h2>About me</h2>
              <Balancer>
                {" "}
                <p>{sum}</p>
              </Balancer>
            </div>
            <hr />
            <div className="flex11">
              <div>
                <h2>Experience</h2>
                <Balancer>
                  {" "}
                  <p>{workExp}</p>
                </Balancer>
              </div>
            </div>
            <hr />
            <div className="flex11">
              <div>
                <h2>Education</h2>
                <p>{education}</p>
              </div>
            </div>
            <hr />
            <div className="flex12">
              <div>
                <h1>Language</h1>
                <ul>
                  <li>Hebrew</li>
                  <li>English</li>
                  <li>Geramn</li>
                </ul>
              </div>
              <div>
                <h2>Expertise</h2>
                <p>{skills}</p>
              </div>
            </div>
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
