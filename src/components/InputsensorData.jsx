import {React, useState} from "react";
import '../assets/styles/inputdata.css'
import {Link} from "react-router-dom"

function LoadData(){
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    function handleChange(event) {
        setFile(event.target.files[0])
        console.log('si leyo')
      }
   
    const submitHandler =(e)=>{
        e.preventDefault();
        if (file) {
            fileReader.onload = function (event) {
                const csvOutput = event.target.result;
                localStorage.setItem('csvOutput',csvOutput)
                console.log(csvOutput)
                
            };

            fileReader.readAsText(file);
        }
        
    }
    

    return(
        
        <form className='form-data' >
            <p className="text-form">Por favor carga los datos de tu sensor de humedad presionando Seleccionar archivo</p>
            <div className="form-row"/>
                <div className="nombre">
                    <label htmlFor="inputData">Datos el sensor en formto CSV</label>
                    <input type="file" className="form-control" id="inputdata" accept=".csv" onChange={handleChange}/>     
                </div>
                <div className="buttons-container">
                <button  className="btns btn-cargar fa fa-upload" onClick={submitHandler}>Cargar</button>
                <button  className="btns btn-aceptar fa fa-upload"><Link to="/personaldata">Continuar</Link></button>
                </div>
                
            
        </form>
    );
}
export default LoadData;