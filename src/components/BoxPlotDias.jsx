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
  const fechasSinNumero=[]
  const fechasEnDias= fechas.map(fecha=>new Date(fecha));
  for(let i =0; i<fechas.length;i++){
    fechasSinNumero.push(fechas[i].slice(0,9))
  }
  /* for(let i=0; i<50;i++){
    console.log(porcentaje[i])
  } */
  /* for(i=0; i<fechas.length; i++){
    fechas[i].
  } */
  console.log(datos)
    return(
        <p></p>
    )
}
export default BoxPlotDias;