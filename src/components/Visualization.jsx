import {React, useContext, useState} from "react";
import '../assets/styles/visualization.css'
import ReactApexChart from 'react-apexcharts'
import Carousel from 'react-bootstrap/Carousel';
import ModalCampo from "./ModalCampo";
import ModalData from "./ModalData";
import  { DataContext } from '../context/StaticContex'


function LoadDatatwo(props){
  const [estado, setEstado]=useState('')
   const {contextData} = useContext(DataContext);
   const {valorNombre} = useContext(DataContext);
    const data= localStorage.getItem('datos')
    const  datos= JSON.parse(data)
    const fechas= [];
    const porcentaje=[];
    const getData=()=>{
        for(let i=0; i<datos.data.length;i++){
            fechas.push(datos.data[i].Fecha)
            porcentaje.push(datos.data[i].SW10)
        }
    }
    getData();
    porcentaje.shift();
    fechas.shift();
 
      if((typeof(contextData))=='string'){
        /* setEstado(`Su capacidad de campo es ${contextData[0]} y su punto de marchitez es ${contextData[1]}`) */
      }
        
      
     
    console.log(DataContext)
     const seriesone= [ {
      
        name: 'Porcentaje Humedad',
        data: porcentaje
      }];
       const optionsone= {
        chart: {
          height: 300,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          title: {
            text: 'Fechas'
          },

          type: 'datetime',
          categories: fechas
        },
        
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      
        yaxis: [{
          title: {
            text: 'Porcentaje de Humedad',
          },
          max: 60,
          min:0
        
        }],
       
        
        annotations: {
          
           yaxis: [
            {
             
              y: contextData[0],
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#00E396'
                },
                text: 'Capacidad de campo'
              }
            },
            {
              y: contextData[1],
              borderColor: 'red',
              label: {
                borderColor: 'red',
                style: {
                  color: '#fff',
                  background: 'red'
                },
                text: 'Punto de marchitez'
              }
            }
           
          ] 
        },
        
        
      }
    return (
      
      <>
      
      <div className="plots-container">
        <p></p>
      <div id="chart">
        <ReactApexChart
                options={optionsone}
                series={seriesone}
                type="line"
                height={350}
              />
        {/* <input onChange={filterdata} type="date" id="startDate" />
        <input onChange={filterdata} type="date" id="endDate"/> */}
        
        </div>
        
        <p   id="parrafoinfo">En la grafica puede ver el comportamiento de la humedad de suelo en el tiempo, al ingresae el tipo de campo de su finca, podra visualizar dos lineas que represetan los limites de humedad aptos  </p> 
     {/*  <Carousel variant="dark">
      <Carousel.Item>
       
    
      </Carousel.Item>
     
      <Carousel.Item>
      <div id="chart">
        <ReactApexChart
                options={optionsone}
                series={seriesone}
                type="line"
                height={350}
              />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <ReactApexChart 
    
                options={optionsone}
                series={seriesone}
                type="line"
                height={350}
              
              />
      </Carousel.Item>
    </Carousel> */}
    {/* <button  >descargr en pdf</button> */}
    
      </div>
       
        
        
      </>
    );
}
export default LoadDatatwo;
