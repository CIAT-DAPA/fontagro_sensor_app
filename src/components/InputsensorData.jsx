import {React, useState} from "react";
import '../assets/styles/inputdata.css'
import {Link} from "react-router-dom"
import Papa from 'papaparse';

function LoadData(){
    const valores =(e)=>{
        e.preventDefault()
            Papa.parse(document.getElementById('inputdata').files[0],{
                download: true,
                header: true,
                skipEmptyLines:true,
                complete:  function(results){
                    const datos= results
                    console.log(datos); 
                    localStorage.setItem('datos',JSON.stringify(datos)) 
                }
            });     
    } 
    return(
        <div className="">
            <form className='form-data ' >
            <p className="text-form">TuFincaStats</p>
            <p className="text-form">Carga los datos de tu sensor de humedad presionando Seleccionar archivo</p>
            <div className="form-row"/>
                <div className="nombre">
                    <label className="label-sensor" htmlFor="inputData">Datos el sensor en formato CSV</label>
                    <input type="file" className="form-control" id="inputdata" accept=".csv" /* onChange={handleChange} *//>     
                </div>
                <div className="buttons-container">
                    <button onClick={valores} className="btns btn-aceptar "><Link to="/visualization">Continuar</Link></button>
                </div>     
        </form>
        </div>
        
    );
}
export default LoadData;