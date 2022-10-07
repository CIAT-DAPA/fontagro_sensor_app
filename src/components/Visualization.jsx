import {React, useState} from "react";
import '../assets/styles/visualization.css'
import * as d3 from 'd3'

import ModalData from "./ModalData";
import ModalDate from "./ModalDate";

function LoadDatatwo(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showw, setShoww] = useState(false);
    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);
    const data= localStorage.getItem('csvOutput')
   
    const prueba=()=>{
        console.log(data)
    }
    return(
        <>
        <div className="plots-container">
            <p>graficas aqui</p>
            <div className="button-container">
                <button onClick={handleShoww}  className="btns btn-cargar fa fa-calendar"> Fechas</button>
                <button onClick={handleShow}  className="btns btn-cargar fa fa-user"> Datos</button>
                <button  className="btn-pdf btn-cargar fa fa-download" onClick={prueba}>  PDF</button>
            </div>
        </div>     
        <ModalDate showw={showw} handleClosee={handleClosee} />  
        <ModalData show={show} handleClose={handleClose} />
        
        </>
        
    );
}
export default LoadDatatwo;