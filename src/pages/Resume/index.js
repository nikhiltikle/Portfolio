import React, { useEffect, useState } from "react";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { FaDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "./resume.css";
import pdf from "../../assets/Nikhil Tikle senior forntend resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  // const pdfURL = "resume.pdf";
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Resume_Nikhil_Tikle.pdf";
    link.click();
  };
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return (
    <>
      <br />
      <br />
      <br />
      <div className="resume">
          <div className="flex justify-center items-center p-12">
            <button className="primary-button flex-row" onClick={downloadPDF}>
              <span>
                <FaDownload />
              </span>
              <span>DOWNLOAD CV</span>
            </button>
          </div>

            <div className="flex justify-center items-center mb-20">
              <Document file={pdf} className='mx-4 flex flex-col w-full items-start sm:items-center'>
                <Page
                  pageNumber={1}
                  scale={width > 768 ? 1.0 : 0.5}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
                <Page
                  pageNumber={2}
                  scale={width > 768 ? 1.0 : 0.5}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </div>
      </div>
    </>
  );
};

export default Resume;