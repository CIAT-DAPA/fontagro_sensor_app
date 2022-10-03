import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/InputUserData.css'

    
function ShowPlots(){
    
    
    return(
        
        
        <div className="form">
            <p className="text-form">Seleccione su tipo de campo</p>
            <select className="selectpicker" data-live-search="true">
                <option className="suelo"  value={'1'}>Arenoso</option>
                <option className="suelo" value={'2'}>Franco Arcilloso</option>
                <option className="suelo" value={'3'}>Franca</option>
                <option className="suelo" value={'4'}>Franco Arcilloso</option>
                <option className="suelo" value={'5'}>Franco Arcillo Arenoso</option>
                <option className="suelo" value={'6'}>Arsillo Arenosa</option>
                <option className="suelo" value={'7'}>Arcillosa</option>
                </select>
                <button className="btns btn-aceptar" ><Link to="/visualization">Continuar</Link></button>
                

        </div>   
    )

}
export default ShowPlots