
import React from "react";
import ReactApexChart from "react-apexcharts";
const min= datos=> Math.min(...datos)
const max= datos=> Math.max(...datos)
const arrayAsc= datos=>  datos.sort((a,b)=>a-b);
const quantilel = (datos, q) => {
  const sorted = arrayAsc(datos);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};
const q25l = datos => quantilel(datos, .25);


const q50l = datos => quantilel(datos, .50);

const q75l = datos => quantilel(datos, .75);

const medianl = datos => q50l(datos);

const getValores=(datos)=>{
  let valores=[]
  for(let i=0; i<datos.length;i++){
    valores.push(parseFloat(datos[i].SW10))
  }
  return valores

}

function BoxPlotDias(){

  
  const data = localStorage.getItem("datos");
  const datos = JSON.parse(data);
  datos.data.shift();
  const groups = datos.data.reduce((groups, game) => {
    const date = game.Fecha.split(' ')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});
  
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
  const x= Object.entries(groups).map(([index,group])=>{
      const valores=getValores(group);
      const minv= min(valores).toFixed(2)
      const maxv= max(valores).toFixed(2)
      const media= medianl(valores).toFixed(2)
      const q25= q25l(valores).toFixed(2)
      const q50= q50l(valores).toFixed(2)
      const q75= q75l(valores).toFixed(2)
      console.log([minv,q25,media,q75,maxv])
      return {
        x:index,
        y:[minv,q25,media,q75,maxv]
      }
  })
  const series= [
    {
      type: 'boxPlot',
      data: x
    }
  ]
   const options= {
    chart: {
      type: 'boxPlot',
      height: 350
    },
    title: {
      text: '',
      align: 'left'
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: '#5C4742',
          lower: '#A5978B'
        }
      }
    }
  }

    return(
      <div id="chart">
      <ReactApexChart options={options} series={series} type="boxPlot" height={350} />
    </div>
    )
}
export default BoxPlotDias;