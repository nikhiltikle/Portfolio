import React, { useEffect,useState } from 'react';

import '../../components/atoms/PrimaryBtn/PrimaryBtn.css';
import '../shared/Shared.css';

import { FaDownload } from 'react-icons/fa';


import { Document, Page, pdfjs } from "react-pdf";
// import { Container, Row } from "react-bootstrap";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {


    const pdfURL = 'resume.pdf';
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = 'resume_nikhil_tikle.pdf';
        link.click();
    };
    const [width, setWidth] = useState(1200);
    useEffect(() => {

        setWidth(window.innerWidth);
    }, [])
    return (
        <>  
        <br/>
        <br/>
        <br/>
            <div className='flex justify-center items-center' style={{padding:"50px"}}>
                <button className='primary-button '  style={{flexDirection:"row"}}  onClick={downloadPDF}>
                <span>
                    <FaDownload />
                </span>
                    <span>Download CV</span>
                    
                </button>
            </div>

            <div className="resume-section">
                <div className="resume" >
                    <Document file={pdfURL} >
                        <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6}  renderAnnotationLayer={false} renderTextLayer={false}/>
                        <Page pageNumber={2} scale={width > 786 ? 1.4 : 0.6} renderAnnotationLayer={false} renderTextLayer={false} />
                    </Document>
                </div>
            </div>
        </>
    );
};


export default Resume;





