import {React, useState} from "react";
import '../assets/styles/visualization.css'
import ReactApexChart from 'react-apexcharts'


import ModalData from "./ModalData";
import ModalDate from "./ModalDate";

function LoadDatatwo(){
    const data= localStorage.getItem('datos')
    const nombre= localStorage.getItem('nombre')
    const  datos= JSON.parse(data)
    const fechas= [];
    const porcentaje=[];
   
    const getData=()=>{
        for(let i=0; i<datos.data.length;i++){
            fechas.push(datos.data[i].Fecha)
            porcentaje.push(datos.data[i].SW10)
            
        }
    }
    const datosP = ['15.25','12.35','14,42','18.81']
    getData()
    porcentaje.shift()
    fechas.shift()
   
    console.log(fechas)
    console.log(porcentaje)

    const series= [/* {
        name: 'series1',
        data: ["31", "40", "28", "51", "42"],
      }, */ {
        name: 'Porcentaje Humedad',
        data: porcentaje
      }];
       const options= {
        chart: {
          height: 350,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: fechas
        },
        tooltip: {
          x: {
            format: 'yy/MM/dd HH:mm'
          },
        },
      }
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showw, setShoww] = useState(false);
    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);
    
    
    return(
        <>
        
        <div className="plots-container">
        <p className="texto">{nombre}</p>
        <div id="chart">
          
             <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
            
            
            <div className="button-container">
                {/* <button onClick={handleShoww}  className="btns btn-cargar fa fa-calendar"> Fechas</button>
                <button onClick={handleShow}  className="btns btn-cargar fa fa-user"> Datos</button> */}
            </div>
        </div>     
        <ModalDate showw={showw} handleClosee={handleClosee} />  
        <ModalData show={show} handleClose={handleClose} />
        
        </>
        
    );
}
export default LoadDatatwo;