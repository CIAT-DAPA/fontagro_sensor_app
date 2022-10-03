import React from "react";
import LoadData from "./InputsensorData";
import '../assets/styles/visualization.css'

function LoadDatatwo(){
    const prueba=()=>{
        const data= localStorage.getItem('csvOutput')
        const dataJson=data.split(',');
        
        console.log(typeof(dataJson))
        console.log(dataJson)
    }
    
    return(
        <div className="plots-container">
            <p>Graficas aqui</p>
            <div className="button-container">
                <button  className="btns btn-cargar fa fa-calendar"> Fechas</button>
                <button  className="btns btn-cargar fa fa-user"> Datos</button>
                <button  className="btn-pdf btn-cargar fa fa-download" onClick={prueba}>  PDF</button>
            </div>
            
        </div>     
    );
}
export default LoadDatatwo;