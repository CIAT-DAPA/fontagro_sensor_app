import {React, useState} from "react";
import '../assets/styles/visualization.css'
import ReactApexChart from 'react-apexcharts'


import ModalData from "./ModalData";
import ModalDate from "./ModalDate";

function LoadDatatwo(){
    const data= localStorage.getItem('datos')
    const  datos= JSON.parse(data)
    const fechas= [];
    const porcentaje=[];
   
    const getData=()=>{
        for(let i=0; i<10;i++){
            fechas.push(datos.data[i].Fecha)
            porcentaje.push(datos.data[i].SW10)
            
        }
    }
    
    getData()
    porcentaje.shift()
    fechas.shift()
   
    console.log(fechas)
    console.log(porcentaje)
    const series= [{
        name: 'series1',
        data: ["31", "40", "28", "51", "42", "109", "100"],
      }, {
        name: 'series2',
        data: [1,2,3]
      }];
       const options= {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
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
        <div id="chart">
             <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
            
            
            <div className="button-container">
                <button onClick={handleShoww}  className="btns btn-cargar fa fa-calendar"> Fechas</button>
                <button onClick={handleShow}  className="btns btn-cargar fa fa-user"> Datos</button>
                <button  className="btn-pdf btn-cargar fa fa-download" /* onClick={prueba} */>  PDF</button>
            </div>
        </div>     
        <ModalDate showw={showw} handleClosee={handleClosee} />  
        <ModalData show={show} handleClose={handleClose} />
        
        </>
        
    );
}
export default LoadDatatwo;