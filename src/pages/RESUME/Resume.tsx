import React, { forwardRef, useRef } from "react";
import { useReactToPrint, UseReactToPrintOptions } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./RES.css"

interface CustomReactToPrintOptions extends UseReactToPrintOptions {
  content: () => React.ReactInstance | null;
}

const ComponentToPrint = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>Content to Print</div>;
});
const Resume = () => {
  const componentRef = useRef<HTMLDivElement>(null); 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  } as UseReactToPrintOptions);

  const downloadPDF = () => {
    const input = componentRef.current; 
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
      });
    }
  };

  return (
    <div className="BODY">

      
          <ComponentToPrint ref={componentRef} />
   
        {/* Button to Download as PDF */}
        <div className="download_button">
        <button onClick={downloadPDF}>Download as PDF</button>
        </div>
      {/* Resume content Start */}
      <div className="mainsheet">
      <div className="print"
        ref={componentRef}
        style={{ padding: "20px", backgroundColor: "#fff" }}
      >
      
         <div className="resumeHeader">
         <h2>VINOTH.M</h2>
         <div className="header_res">
         <div className="imgdiv">
         <img src="#" className="myImage"></img>
         </div>

         <div className="addrsessdiv">
            <li>Vinoth.M</li>
            <li>m.vinoth9159@gmail.com</li>
            <li>7339149047</li>
            <li>6/8 Northstreet,kalangathakandy</li>
          </div>
          </div>

         </div>

      </div>
      </div>

      {/* Resume content Start */}


    </div>
  );
};

export default Resume;
