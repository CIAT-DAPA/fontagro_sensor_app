import { React, useContext, useState } from "react";
import "../assets/styles/visualization.css";
import { DataContext } from "../context/StaticContex";
import ColorGraphic from "./ColorGraphic";
import DownloadPdf from "./Donwload";
import ShowTable from "./Table";
import BoxPlot from "./BoxPlot";
function LoadDatatwo() {
  let tituloGrafica = "";
  let tituloGeneral = "";
  let nombreFinca= "";
  let periodoDeTiempo=''

  let tituloInicio='Lo invitamos a ingresar sus datos y seleccionar su tipo de campo en el menu, parte superior derecha';
  const { contextDatao } = useContext(DataContext);
  const { nombreP } = useContext(DataContext);
  const { finca } = useContext(DataContext);
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
    tituloGeneral = `Nombre del Productor :  ${nombreP}`;
    tituloInicio=''
  } else {
    tituloGeneral = "";
  }
  finca!="" ?  nombreFinca= `Nombre de la Finca:  ${finca}`  : nombreFinca="" ;
  console.log()
  return (
    <div className="container-fluid">
      <>
      <p className="info">{tituloInicio}</p>
      <p className="info">Informacion General</p>
      <p className="titulo-general">{tituloGeneral}</p>
      <p className="titulo-general">{nombreFinca}</p>
      <p className="titulo-grafica">{tituloGrafica} </p>
      <p className="titulo-grafica">{periodoDeTiempo} </p>

      
          <ColorGraphic />
          <BoxPlot />
      <div className="plots-container">
        <p></p>
        <div id="chart">
        <p>En la graficas puede ver el comportamiento de la humedad de suelo en
            el tiempo, al ingresar el tipo de campo de su finca, podra
            visualizar dos lineas que represetan los limites de humedad aptos para su suelo, adicionalmente abajo puede visualizar las estadisticas en el periodo de tiempo que estuvo instalado el sensor.
          </p>
          <div className="colors">
            <div className="baja"></div> <p className="humedad">Humedad Baja</p>
            <div className="media"></div><p className="humedad"> Humedad ideal</p>
            <div className="alta" ></div><p className="humedad">Suelo Saturado</p>
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
