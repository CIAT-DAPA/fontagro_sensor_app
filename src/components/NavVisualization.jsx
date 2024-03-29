import {React, useState} from "react";
import Container from 'react-bootstrap/Container';
import ShowAbout from "./About";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom"
import ModalData from "./ModalData";
import ModalDate from "./ModalDate";
import ModalCampo from "./ModalCampo";
import ModalCultivo from "./ModalCultivo";

function NavVisualiation(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showt, setShowt] = useState(false);
    const handleCloset = () => setShowt(false);
    const handleShowt = () => setShowt(true);

    const [showw, setShoww] = useState(false);
    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);

    const [showc, setShowc] = useState(false);
    const handleClosec = () => setShowc(false);
    const handleShowc = () => setShowc(true);

    const [showa, setShowa] = useState(false);
    const handleClosea = () => setShowa(false);
    const handleShowa = () => setShowa(true);
    return(     
         <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
            <Link className="navbar-brand" to="/">
        <img src={require('../assets/images/Logo-gota.png')}  />
      </Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Opciones
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link onClick={handleShow}className="nav-link" to="">Datos de la finca</Link>
                    {/* <Link onClick={handleShowc} className="nav-link" to="">Textura del suelo</Link> */}
                    <Link onClick={handleShoww} className="nav-link" to="">Filtrar datos</Link>
                    <Link onClick={handleShowt} className="nav-link" to="">Cultivo</Link>

                    <Link onClick={handleShowa} className="nav-link" to="">Acerca de</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <ModalDate showw={showw} handleClosee={handleClosee} /> 
        <ModalData show={show} handleClose={handleClose} />
        <ModalCampo showc={showc} handleClosec={handleClosec} />
        <ModalCultivo showt={showt} handleCloset={handleCloset} />
        <ShowAbout showa={showa} handleClosea={handleClosea} />
      </>
    )
}
export default NavVisualiation;