import {React, useState} from "react";
import { Link } from "react-router-dom";
import '../assets/styles/droprdown.css'
import ModalData from "./ModalData";
import ModalDate from "./ModalDate";

function ShowDropdown(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showw, setShoww] = useState(false);
    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={require('../assets/images/logo-fontagro1.png')}  />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button onClick={handleShow}>Ingresar Datos Personales</button>
          </li>
          <li className="nav-item">
          <button onClick={handleShoww} >Ingresar Fechas</button>
            
          </li>
         </ul>
      </div>
    </nav>
    <ModalDate showw={showw} handleClosee={handleClosee} />  
        <ModalData show={show} handleClose={handleClose} />
    </>
       
    )
}
export default ShowDropdown