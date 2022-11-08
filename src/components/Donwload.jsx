import React from "react";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import '../assets/styles/download.css'
function DownloadPdf({rootElementId,DownloadFileName}){
    const downloadFileDocument= ()=>{
        const input= document.getElementById(rootElementId);
        html2canvas(input).then((canvas)=>{
            const imgData= canvas.toDataURL("image/png");
            const pdf= new jsPDF("p","pt","c2");
            pdf.addImage(imgData,"JPEG",0,0);
            pdf.save(`${DownloadFileName}`);
        })
        
    }
    return(
        <button className="download" onClick={downloadFileDocument}>Descargar Reporte</button>
    )
}
export default DownloadPdf;