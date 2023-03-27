import {React, useState, useContext} from "react";
import '../assets/styles/inputdata.css'
import {Link} from "react-router-dom"
import Papa from 'papaparse';
import { DataContext } from "../context/StaticContex";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function LoadData(){
const {json, setJson} = useContext(DataContext);
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
                    setJson(datos)
                     window.location.reload()
                }
            });     
    } 
    return(
        <div className="">
            <form className='form-data ' >
                
                <p className="text-form">TuFincaStats</p>
            <p className="text-form">Carga los datos de tu sensor de humedad presionando Seleccionar archivo</p>
            <div className="form-row"/>
                <div className="nombre ">
                    <label className="label-sensor text-center w-100" htmlFor="inputData">Datos el sensor en formato CSV</label>
                    <input type="file" className="form-control" id="inputdata" accept=".csv" /* onChange={handleChange} *//>     
                </div>
                <div className="buttons-container">
               
                <Link type="button" className="btn btn-primary btn-lg px-4 text-white mt-5" to="/visualization">Continuar <FontAwesomeIcon icon={faArrowRight} /></Link>

                </div>  
                    
               
        </form>
        </div>   
    );
}
export default LoadData;