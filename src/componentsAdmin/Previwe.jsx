import React, { useEffect, useState } from "react";
import "../componentsClient/cv.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CVrender from "../componentsClient/CVrender";
import { API_URL, doApiMethod } from "../services/apiService";
const Previwe = () => {
  const location = useLocation();
  const [info, setInfo] = useState([{body:[]}])
  let { data } = location.state || {};
  console.log(data);
  data = {
    id: data,
  };

  // console.log(data[0].body[0]);
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = API_URL + "/resumes/getinfo";
    const res = await doApiMethod(url, "POST", data);
    setInfo([res.data]);
  };

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
    <>{info && <></>}
      <div className="center">
        <div className="border border-3" >
          <div
            ref={printRef}
            className="d-flex flex-column"
            style={{ height: "1131.44px", width: "800px" }}
          >
            <div className="mb-4"
              style={{
                display: "flex",
                background: "#F2F8FA",
                height: "200px",
              }}
            >
              {/*Header */}
              <div className="ps-5"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  justifyContent: "center",
                }}
              >
                <h1>{info[0]?.fullName}</h1>
                <h3>positon</h3>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3" >
                <ul className="list-unstyled">
                  {info[0]?.phone && (<div className="d-flex"><i class="bi bi-telephone-fill"></i><li className="ms-2">{info[0]?.phone}</li></div>)}
                  {info[0]?.email && (<div className="d-flex"><i class="bi bi-envelope-at-fill"></i><li className="ms-2">{info[0]?.email}</li></div>)}
                  {info[0]?.github && (<div className="d-flex"><i class="bi bi-github"></i><li className="ms-2">{info[0]?.github}</li></div>)}
                  {info[0]?.linkdin && (<div className="d-flex"><i class="bi bi-linkedin"></i><li className="ms-2">{info[0]?.linkdin}</li></div>)}
                </ul>
              </div>

            </div>
            {/* header end */}
            <CVrender data={info[0]?.body} />
            <div style={{ flexGrow: 1 }}></div>
            <div style={{background: '#F2F8FA', height: '60px'}}></div>
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

export default Previwe;
