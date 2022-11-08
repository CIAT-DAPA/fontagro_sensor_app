import React from "react";

function BoxPlotDias(){
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
  const fechasEnDias= fechas.map(fecha=>new Date(fecha));
  console.log(fechas)
    return(
        <p></p>
    )
}
export default BoxPlotDias;