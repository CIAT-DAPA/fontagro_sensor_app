import { React, useContext, useState } from "react";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";
import "../assets/styles/visualization.css";
import { DataContext } from "../context/StaticContex";
import ColorGraphic from "./ColorGraphic";
import DownloadPdf from "./Donwload";
import ShowTable from "./Table";
import BoxPlotDias from "./BoxPlotDias";
import ModalCampo from "./ModalCampo";
function LoadDatatwo() {
    
  let tituloGrafica = "";
  let tituloGeneral = "";
  let nombreFinca = "";
  let periodoDeTiempo = "";
  let infoGeneral = "";
  let tituloInicio =
    "En el menu de la parte superior derecha, podrá filtrar datos en un periodo de tiempo especifico e ingresar datos como su nombre y el de su finca.";
  const { contextDatao } = useContext(DataContext);
  const { nombreP } = useContext(DataContext);
  const { finca } = useContext(DataContext);
  const { json } = useContext(DataContext);
  const { inicio } = useContext(DataContext);
  const { fin } = useContext(DataContext);
  const data = localStorage.getItem("datos");
  const datos = JSON.parse(data);
  const fechas = [];
  const porcentaje = [];
  const getData = () => {
    for (let i = 0; i < datos.data.length; i++) {
      fechas.push(datos.data[i].Fecha);
      porcentaje.push(datos.data[i].SW10);
    }
  };
  getData();
  porcentaje.shift();
  fechas.shift();

   inicio!='' && fin!='' ?  periodoDeTiempo = `Periodo de tiempo: ${inicio} -- ${fin}` 
   : console.log('')
  if (contextDatao[2] != undefined) {
    tituloGrafica = `Textura del suelo :  ${contextDatao[2]}`;
    tituloInicio = "";
  } else {
    tituloGrafica = "";
  }
  if (nombreP != "") {
    tituloGeneral = `Nombre del productor :  ${nombreP}`;
    tituloInicio = "";
  } else {
    tituloGeneral = "";
  }
  finca != ""
    ? (nombreFinca = `Nombre de la finca:  ${finca}`)
    : (nombreFinca = "");
  finca != ""
    ? (infoGeneral = `Infomación general`)
    : nombreP != ""
    ? (infoGeneral = `Infomación general`)
    : contextDatao[2] != undefined
    ? (infoGeneral = `Infomación general`)
    : (nombreFinca = "");
    const [showc, setShowc] = useState(false);
    const handleClosec = () => setShowc(false);
    const handleShowc = () => setShowc(true);
    const createPDF = async () => {
      let orientacion
      if (window.screen.width < 1400){
          //console.log("Pequeña")
          orientacion = 'p' 
      }else {
          //console.log("Grande")
          orientacion = 'l'
      }

      let html = document.getElementById('contain')
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
  return (
    <div className="container" id='contain'>
      <>
        <div className="card mb-4 shadow-sm  mb-5 bg-body rounded">
          <div className="card-header mb-2">
            <p className="info-general">{infoGeneral}</p>

          </div>
          <p className="info">{tituloInicio}</p>
          
          {tituloGeneral && <p className="titulo-general">{tituloGeneral}</p>}
          {nombreFinca && <p className="titulo-general">{nombreFinca}</p>}
          {tituloGrafica && <p className="titulo-grafica">{tituloGrafica} </p>}
          {periodoDeTiempo && (
            <p className="titulo-grafica">{periodoDeTiempo} </p>
          )}
        </div>
        <div className="card card-body shadow-sm  mb-5 bg-body rounded">
              <p>
                En la primer grafica puede observar  el comportamiento de humedad de su finca en el tiempo que estuvo instalado el sensor, en la segunda grafica podrá observar las estadisticas de todos los dias en los que el sensor estuvo instalado.
                Por ultimo encontrará una tabla con estos datos expresados en filas y columnas para una mejor interpretación, todas las graficas y la tabla serán actualizadas de manera dinamica en función a las fechas que filtre.
                Lo invitamos a seleccionar su tipo de campo, presionando el boton, 'Selecciona textura de suelo' que se encuentra debajo, al seleccionar un tipo de suelo la grafica se actualizará mostrando los limites de humedad aptos para el tipo de suelo de su finca.
              </p>
            <button onClick={handleShowc}  className="btn btn-primary my-4">Seleciona textura de suelo</button>

            </div>
            <div id="graphics">
            <div className="card shadow-sm  mb-5 bg-body rounded">
          <div className="card-header mb-2">
            <p className="grafica-titulo">Porcentaje de humedad</p>
          </div>
          <div className="">
            <p className="info">
              En la siguiente grafica puede observar la información sobre la
              humedad del suelo obtenida por el sensor
            </p>
            <div className="colors">
              <div className="baja"></div>{" "}
              <p className="humedad">Humedad Baja</p>
              <div className="media"></div>
              <p className="humedad"> Humedad ideal</p>
              <div className="alta"></div>
              <p className="humedad">Suelo Saturado</p>
            </div>
            <ColorGraphic />
            
          </div>
        </div>

       
        <div className="grafica-titulo card  mt-4 shadow-sm  mb-5 bg-body rounded">
          <div className="card-header mb-2">
            <p className="">Variabilidad del porcentaje de humedad</p>
          </div>
          <p className="boxplot-text">
            En la siguiene grafica puede ver las estadisticas de humedad de
            suelo en los dias que estuvo instalado el sensor
          </p>
          <div className="colors">
            <div className="baja"></div> <p className="humedad">Humedad Baja</p>
            <div className="media"></div>
            <p className="humedad"> Humedad ideal</p>
            <div className="alta"></div>
            <p className="humedad">Suelo Saturado</p>
          </div>
          <BoxPlotDias />
        </div>
        <div className="html2pdf__page-break"></div>

        <div className="grafica-titulo card  mt-4 shadow-sm  mb-5 bg-body rounded">
        <div className="card-header mb-2">
        <p>Tabla de datos en el tiempo</p>

        </div>
        <p className="boxplot-text">En la siguiene tabla puede ver las estadisticas de humedad</p>
        
      <ShowTable  />

      </div>
            </div>
        
      
        <div className="plots-container">
          <div id="chart">
          

            <div className="report">
              <DownloadPdf
                rootElementId={"graphics"}
                DownloadFileName="testPage"
              />
            {/* <button onClick={createPDF}>descar</button> */}
            </div>
          </div>
        </div>
        <ModalCampo showc={showc} handleClosec={handleClosec} />
        
      </>
    </div>
  );
}
export default LoadDatatwo;
