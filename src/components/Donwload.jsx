import React from "react";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import html2pdf from 'html2pdf.js'
import '../assets/styles/download.css'
function DownloadPdf({rootElementId}){
    const downloadFileDocument= ()=>{
        const input= document.getElementById(rootElementId);
       
        var opt = {
            margin: -2,

            filename: 'Reporte.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'px', format: [1200, 1200], orientation: 'portrait' }
        };
        html2pdf().from(input).set(opt).save();
        
    }
    return(
        
       /*  <button type="button" className="btn btn-secondary">Descargar Reporte</button> */
       <button  onClick={downloadFileDocument} type="button" className="btn btn-primary my-4">Descargar Reporte </button>
    )
}
export default DownloadPdf;