import React from "react";
import '../assets/styles/inputdata.css'
import {Link} from "react-router-dom"

function LoadData(){
    const submitHandler =(e)=>{
        e.preventDefault();
        const data= document.querySelector('#inputdata')
        console.log(data.value)
    }
    return(
        
        <form className='form-data' onSubmit={submitHandler} >
            <p className="text-form">Por favor carga los datos de tu sensor de humedad presionando Seleccionar archivo</p>
            <div className="form-row"/>
                <div className="nombre">
                    <label htmlFor="inputData">Datos el sensor en formto CSV</label>
                    <input type="file" className="form-control" id="inputdata" accept=".csv"/>     
                </div>
                <button  className="btns btn-cargar">Cargar</button>
                <button  className="btns btn-aceptar"><Link to="/personaldata">Continuar</Link></button>
            
        </form>
    );
}
export default LoadData;