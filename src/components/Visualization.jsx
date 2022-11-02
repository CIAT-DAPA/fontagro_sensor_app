import { React, useContext, useState } from "react";
import "../assets/styles/visualization.css";
import Carousel from "react-bootstrap/Carousel";
import { DataContext } from "../context/StaticContex";
import ColorGraphic from "./ColorGraphic";
import DownloadPdf from "./Donwload";
import GraficaLinea from "./GraficaLinea";
import BoxPlot from "./BoxPlot";
function LoadDatatwo() {
  let tituloGrafica = "";
  let tituloGeneral = "";
  let tituloInicio='Ingrese sus datos e ingrese su tipo de campo presionando en el menu, parte superior derecha';
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
    tituloGrafica = `Tipo de Suelo de la finca:  ${contextDatao[2]}`;
    tituloInicio=''
  } else {
    tituloGrafica = "";
  }
  if (nombreP != "" && finca != "") {
    tituloGeneral = `Usuario:  ${nombreP},  el comportamiento  de humedad de la finca:  ${finca} en el periodo ${
      fechas[0]
    } hasta el ${fechas.at(-1)}  fue el siguiente: `;
    tituloInicio=''
  } else {
    tituloGeneral = "";
  }
  return (
    <>
      <p>{tituloInicio}</p>
      <p>{tituloGrafica} </p>
      <p>{tituloGeneral}</p>
            
      <Carousel variant="dark">
        <Carousel.Item className="jej">
          <ColorGraphic />
        </Carousel.Item>
       {/*  <Carousel.Item className="jej">
          <BoxPlot />
        </Carousel.Item> */}
      </Carousel>
      
      <div className="plots-container">
        <p></p>
        <div id="chart">
          <p>
            En la grafica puede ver el comportamiento de la humedad de suelo en
            el tiempo, al ingresar el tipo de campo de su finca, podra
            visualizar dos lineas que represetan los limites de humedad aptos para su suelo.
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
  );
}
export default LoadDatatwo;
