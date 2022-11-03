
import {React,useContext} from "react";
import ReactApexChart from "react-apexcharts";
import { DataContext } from "../context/StaticContex";
import '../assets/styles/boxplot.css'

function BoxPlot(){
  const { contextDatao } = useContext(DataContext);

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
  const porcentajeFLoat= porcentaje.map(porcent=>parseFloat(porcent));
  //array ascendente
  const arrayAsc= porcent=>  porcentajeFLoat.sort((a,b)=>a-b);
  //suma del array
  const arraySum =porcent=> porcentajeFLoat.reduce((a, b) => a + b,0);

  //media
  const media = porcent=>  arraySum(porcentajeFLoat) / porcentajeFLoat.length;
  //valor maximo
  const max= porcent=> Math.max(...porcentajeFLoat)
  //valor minimo
  const min= porcent=> Math.min(...porcentajeFLoat)
const quantile = (porcentajeFLoat, q) => {
  const sorted = arrayAsc(porcentajeFLoat);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
      return sorted[base];
  }
};

const q25 = porcent => quantile(porcentajeFLoat, .25);


const q50 = porcent => quantile(porcentajeFLoat, .50);

const q75 = porcent => quantile(porcentajeFLoat, .75);

const median = porcent => q50(porcentajeFLoat);
    const series= [
        {
          type: 'boxPlot',
          data: [
      
            {
              x: `Estadisticas entre ${fechas[0]} y ${fechas.at(-1)}`,
              y: [min(), q25(), median(), q75(),max() ]
            }
            
          ]
         
        }
      ]
     const  options= {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        title: {
          text: 'Estadisticas',
          align: 'left'
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#5C4742',
              lower: '#A5978B'
            }
          }
        },
        
      }
    
      return(
        <div id="chart">
          <ReactApexChart options={options} series={series} type="boxPlot" height={350}  />
        </div>
        
    )
    
    };
  
   
export default BoxPlot;