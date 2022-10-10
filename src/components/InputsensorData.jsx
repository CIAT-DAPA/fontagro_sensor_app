import {React, useState} from "react";
import '../assets/styles/inputdata.css'
import {Link} from "react-router-dom"
import Papa from 'papaparse';

function LoadData(){
    const [file, setFile] = useState()
    /* const [file, setFile] = useState();
    const fileReader = new FileReader();
    function handleChange(event) {
        setFile(event.target.files[0])
        console.log('si leyo')
      }

    const submitHandler =(e)=>{
        e.preventDefault();
        if (file) {
            fileReader.onload = function (event) {
                const csvOutput = (event.target.result)
                localStorage.setItem('csvOutput',csvOutput)
                console.log(csvOutput)    
            };
            fileReader.readAsText(file);       
        }
        
    } */
    const valores =(e)=>{
        e.preventDefault()
        const uploadconfirm= document.getElementById('cargar').addEventListener('click',()=>{
            Papa.parse(document.getElementById('inputdata').files[0],{
                download: true,
                header: true,
                skipEmptyLines:true,
                complete:  function(results){
                    const datos= results
                    console.log(datos); 
                    localStorage.setItem('datos',JSON.stringify(datos)) 
                }
            })
        })
    }
    
    
    

    return(
        
        <form className='form-data' >
            <p className="text-form">Por favor carga los datos de tu sensor de humedad presionando Seleccionar archivo</p>
            <div className="form-row"/>
                <div className="nombre">
                    <label className="label-sensor" htmlFor="inputData">Datos el sensor en formato CSV</label>
                    <input type="file" className="form-control" id="inputdata" accept=".csv" /* onChange={handleChange} *//>     
                </div>
                <div className="buttons-container">
                    <button id="cargar" className="btns btn-cargar fa fa-upload" onClick={valores}><a href="">Cargar</a></button>
                    <button  className="btns btn-aceptar fa fa-upload"><Link to="/personaldata">Continuar</Link></button>
                </div>     
        </form>
    );
}
export default LoadData;