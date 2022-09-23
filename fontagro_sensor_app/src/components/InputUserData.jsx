import React from "react";
import '../assets/styles/InputUserData.css'
function PersonalData(){
    return(
        
        <form>
            <p className="text-form">Por favor ingresa tu nombre,el nombre de tu finca y presiona aceptar</p>
            <div className="form-row">
                <div className="nombre">
                    <label htmlFor="inputNobre">Nombre</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Su nombre aqui"/>
                </div>
            <div className="finca">
                <label htmlFor="inputFinca">Nombre de la finca</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Nombre de su finca"/>
            </div>
            </div>
            <button  className="btn-aceptar">Aceptar</button>
      </form>
      
    )

}
export default PersonalData