import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom"
import ModalData from "./ModalData";
import ModalDate from "./ModalDate";
import ModalCampo from "./ModalCampo";

function NavVisualiation(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showw, setShoww] = useState(false);
    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);

    const [showc, setShowc] = useState(false);
    const handleClosec = () => setShowc(false);
    const handleShowc = () => setShowc(true);
    
    return(
        <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
            <Link className="navbar-brand" to="/">
        <img src={require('../assets/images/logo2.png')}  />
      </Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Seleccion de datos
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link onClick={handleShow}className="nav-link" to="">Ingresar datos</Link>
                    <Link onClick={handleShowc} className="nav-link" to="">Seleccionar Suelo</Link>
                    <Link onClick={handleShoww} className="nav-link" to="">Filtrar Datos</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <ModalDate showw={showw} handleClosee={handleClosee} /> 
        <ModalData show={show} handleClose={handleClose} />
        <ModalCampo showc={showc} handleClosec={handleClosec} />
      </>
    )
}
export default NavVisualiation;