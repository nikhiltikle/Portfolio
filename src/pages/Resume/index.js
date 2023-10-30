import React, { useEffect, useState } from "react";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { FaDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const pdfURL = "resume.pdf";
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Resume_Nikhil_Tikle.pdf";
    link.click();
  };
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return (
    <>
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center p-12">
        <button className="primary-button flex-row" onClick={downloadPDF}>
          <span>
            <FaDownload />
          </span>
          <span>Download CV</span>
        </button>
      </div>

        <div className="flex justify-center items-center pb-8">
          <Document file={pdfURL}>
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.4 : 0.5}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
            <Page
              pageNumber={2}
              scale={width > 786 ? 1.4 : 0.5}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
    </>
  );
};

export default Resume;
