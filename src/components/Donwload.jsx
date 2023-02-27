import React from "react";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";

import jsPDF from "jspdf";
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
            JsPDF: { unit: 'px', format: [1400,window.innerWidth], orientation: 'portrait' },
            
        };
        html2canvas().from(input).set(opt).save();
        
    }
    const createPDF = async () => {
        let orientacion
        if (window.screen.width < 1400){
            //console.log("Pequeña")
            orientacion = 'p' 
        }else {
            //console.log("Grande")
            orientacion = 'l'
        }

        let html = document.getElementById(rootElementId)
        let report = new JsPDF(orientacion,'px',[html.offsetWidth+40,html.offsetHeight+40]);
        const canvas = await html2canvas(html,{
            useCORS: true,
            scale: 1,
            allowTaint: true,
        })
        const img = canvas.toDataURL("image/png");
        report.addImage(img,'JPEG',10,10, html.offsetWidth, html.offsetHeight);
        report.save('report.pdf');
      };
    return(
        
       /*  <button type="button" className="btn btn-secondary">Descargar Reporte</button> */
       <button  onClick={downloadFileDocument} type="button" className="btn btn-primary my-4">Descargar Reporte </button>
    )
}
export default DownloadPdf;