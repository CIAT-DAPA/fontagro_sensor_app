
import {React,useContext} from "react";
import ReactApexChart from "react-apexcharts";
import { DataContext } from "../context/StaticContex";

function BoxPlot(){
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
 const porcentajet= porcentaje.map(porcent=>parseFloat(porcent));
console.log(Math.max(...porcentajet));
  console.log(porcentajet)
    const series= [
        {
          type: 'boxPlot',
          data: [
            {
              x: 'Jan 2015',
              y: [50,30,45,56,23]
            },
            {
              x: 'Jan 2016',
              y: [20,30,15,12,34]
            },
            {
              x: 'Jan 2017',
              y: [30, 39, 45, 51,67,70]
            },
            {
              x: 'Jan 2018',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: 'Jan 2019',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: 'Jan 2020',
              y: [41, 49, 58, 61, 67]
            },
            {
              x: 'Jan 2021',
              y: [54, 59, 66, 71, 88]
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
          text: 'Basic BoxPlot Chart',
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
        <ReactApexChart options={options} series={series} type="boxPlot" height={350} />
    )
    
    };
  
   
export default BoxPlot;