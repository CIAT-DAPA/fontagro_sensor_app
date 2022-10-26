import {React, useContext, useState} from "react";
import '../assets/styles/visualization.css'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from "apexcharts";
import Carousel from 'react-bootstrap/Carousel';
import  { DataContext } from '../context/StaticContex'
function LoadDatatwo(props){
  let tituloGrafica=''
  let tituloGeneral=''
   const {contextDatao} = useContext(DataContext);
   const {nombreP} = useContext(DataContext);
   const {finca} = useContext(DataContext);
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
      if((contextDatao[2])!=undefined){
        tituloGrafica=(`Suelo:  ${contextDatao[2]}`)
      }else{
        tituloGrafica='';
      }
      if(nombreP != '' && finca != '' ){
        tituloGeneral=`Hola ${nombreP} el comportamiento de de humedad de la finca ${finca} es el siguiente`
      }else{
        tituloGeneral=''
      }

     const seriesone= [ {
      
        name: 'Porcentaje Humedad',
        data: porcentaje
      }];
       const optionsone= {
        /* theme:{
          mode:'dark'
        }, */
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
        title: {
          text: tituloGrafica, 
          align: 'left',
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
             
              y: contextDatao[0],
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
              y: contextDatao[1],
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
     
      const seriestwo= [ {
      
        name: 'Porcentaje Humedad',
        data: porcentaje
      }];
       const optionstwo= {
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
              y: contextDatao[1],
              y2: 0,
              borderColor: '#000',
              fillColor: 'Red',
              label: {
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
      <p>{tituloGeneral}</p>
  
        
      <ReactApexChart
                options={optionsone}
                series={seriesone}
                type="line"
                height={350}
              /> 
               
               <p   >En la grafica puede ver el comportamiento de la humedad de suelo en el tiempo, al ingresar el tipo de campo de su finca, podra visualizar dos lineas que represetan los limites de humedad aptos  </p> 
        </div>
        {/* <ReactApexChart
                options={optionstwo}
                series={seriestwo}
                type="line"
                height={350}
              />
         */}
        
        
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
