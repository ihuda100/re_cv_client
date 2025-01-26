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
          <div style={{ display: "flex" }}>
            {/*Header */}
            <div style={{ background: "grey", width: "50%" }}>
              <h1>{data.fullName}</h1>
              <h3>positon</h3>
            </div>
            <div>
              <ul>
                <li>{data.phone}</li>
                <li>address</li>
                <li>{data.email}</li>
              </ul>
            </div>
          </div>
          {/* header end */}
          <hr />
          <div className="flex11">
            <h2>About me</h2>
            <Balancer>
              {" "}
              <p>{data.body}</p>
            </Balancer>
          </div>
          <hr />
          <div className="flex11">
            <div>
              <h2>Experience</h2>
            </div>
            <div>
              <h3>company name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, expedita eius repellendus vel exercitationem
                enim fuga, obcaecati aut rem est mollitia. Id asperiores
                eligendi ipsam illum debitis vero ipsa impedit.
              </p>
            </div>
          </div>
          <hr />
          <div className="flex11">
            <div>
              <h2>Education</h2>
            </div>
            <div>
              <h3>university</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, expedita eius repellendus vel exercitationem
                enim fuga, obcaecati aut rem est mollitia. Id asperiores
                eligendi ipsam illum debitis vero ipsa impedit.
              </p>
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
            </div>
            <div>
              <h2>Refrence</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="center" style={{ margin: "5px" }}>
        <button className="btn btn-dark" onClick={handleDownloadPdf}>Download</button>
      </div>
    </>
  );
};

export default Form1;
