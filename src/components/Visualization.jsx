import { React, useContext, useState } from "react";
import "../assets/styles/visualization.css";
import { DataContext } from "../context/StaticContex";
import ColorGraphic from "./ColorGraphic";
import DownloadPdf from "./Donwload";
import ShowTable from "./Table";
import BoxPlotDias from "./BoxPlotDias";
import BoxPlot from "./BoxPlot";
function LoadDatatwo() {
  let tituloGrafica = "";
  let tituloGeneral = "";
  let nombreFinca= "";
  let periodoDeTiempo=''
  let infoGeneral=''
  let tituloInicio='Lo invitamos a ingresar sus datos y seleccionar su tipo de campo en el menu, parte superior derecha';
  const { contextDatao } = useContext(DataContext);
  const { nombreP } = useContext(DataContext);
  const { finca } = useContext(DataContext);
  const { json } = useContext(DataContext);
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
  if (contextDatao[2] != undefined) {
    tituloGrafica = `Textura del suelo :  ${contextDatao[2]}`;
    tituloInicio=''
    periodoDeTiempo=`Periodo de tiempo: ${fechas[0]} -- ${fechas.at(-1)}`
  } else {
    tituloGrafica = "";
  }
  if (nombreP != "" ) {
    tituloGeneral = `Nombre del productor :  ${nombreP}`;
    tituloInicio=''
  } else {
    tituloGeneral = "";
  }
  finca!="" ?  nombreFinca= `Nombre de la finca:  ${finca}`  : nombreFinca="" ;
  finca!="" ?  infoGeneral= `Infomación general` : nombreP!="" ?  infoGeneral= `Infomación general`: contextDatao[2]!= undefined? infoGeneral= `Infomación general`: nombreFinca="" ;
  console.log()
  return (
    <div className="container">
      <>
      <div className="card mb-4 shadow-sm  mb-5 bg-body rounded">
        <div className="card-header mb-2">
          
        <p className="info-general">{infoGeneral}</p>

        </div>
      <p className="info">{tituloInicio}</p>
       {tituloGeneral &&  <p className="titulo-general">{tituloGeneral}</p> }
       {nombreFinca &&  <p className="titulo-general">{nombreFinca}</p> }
       {tituloGrafica && <p className="titulo-grafica">{tituloGrafica} </p> }
       {periodoDeTiempo && <p className="titulo-grafica">{periodoDeTiempo} </p> }

        
        
        


      </div>
      
      <div className="card shadow-sm  mb-5 bg-body rounded">
        <div className="card-header mb-2">
        <p className="grafica-titulo">Porcentaje de humedad</p>

        </div>
        <div className="">
        <p className="info">En la siguiente grafica puede observar la información sobre la humedad del suelo obtenida por el sensor</p>
        <div className="colors">
            <div className="baja"></div> <p className="humedad">Humedad Baja</p>
            <div className="media"></div><p className="humedad"> Humedad ideal</p>
            <div className="alta" ></div><p className="humedad">Suelo Saturado</p>
          </div>
      <ColorGraphic />
      <BoxPlotDias />

      </div>
        </div>
        
      <div className="grafica-titulo card  mt-4 shadow-sm  mb-5 bg-body rounded">
        <div className="card-header mb-2">
        <p>Variabilidad del porcentaje de humedad</p>

        </div>
        <p className="boxplot-text">En la siguiene grafica puede ver las estadisticas de humedad de suelo en los siete dias de la semana</p>
        <div className="colors">
            <div className="baja"></div> <p className="humedad">Humedad Baja</p>
            <div className="media"></div><p className="humedad"> Humedad ideal</p>
            <div className="alta" ></div><p className="humedad">Suelo Saturado</p>
          </div>
      <BoxPlot />


      </div>
        
    {/*   <div className="grafica-titulo card  mt-4 shadow-sm  mb-5 bg-body rounded">
        <div className="card-header mb-2">
        <p>Variabilidad del porcentaje de humedad</p>

        </div>
        <p className="boxplot-text">En la siguiene grafica puede ver las estadisticas de humedad de suelo en los siete dias de la semana</p>
        <div className="colors">
            <div className="baja"></div> <p className="humedad">Humedad Baja</p>
            <div className="media"></div><p className="humedad"> Humedad ideal</p>
            <div className="alta" ></div><p className="humedad">Suelo Saturado</p>
          </div>
      <ShowTable />


      </div> */}
      <div className="plots-container">
        <p></p>
        <div id="chart">
          <div className="card card-body shadow-sm  mb-5 bg-body rounded">
          <p>En la gráficas puede ver el comportamiento de la humedad de suelo en
            el tiempo, al ingresar el tipo de campo de su finca, podra
            visualizar dos lineas que represetan los limites de humedad aptos para su suelo, adicionalmente abajo puede visualizar las estadisticas en el periodo de tiempo que estuvo instalado el sensor.
          </p>
          </div>
        
          
          <div className="report">
          <DownloadPdf rootElementId={'pagetodownload'} DownloadFileName='testPage' />

          </div>
        </div>
      </div>
      </>
    </div>
  );
}
export default LoadDatatwo;
