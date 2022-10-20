import '../assets/styles/modaldate.css'
import {React ,useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from '../context/StaticContex';
function ModalData({show, handleClose}){
  const {nombre, setNombre} = useContext(DataContext);
  /* const [nombre, setNombre] = useState(); */
  const [finca, setFinca] = useState();
  const mostrarNombre=(e)=>{
    setNombre(e.target.value)     
  }
  const mostrarFinca=(e)=>{
    setFinca(e.target.value)     
  }
  console.log(nombre)
  console.log(finca)
    
    return(
        <div className='modal'>
            <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingrese su nombre y nombre de su finca</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body' >
            <div>
            <label  htmlFor="inputData">Nombre</label>
            <input onChange={mostrarNombre} type="text" className="form-control" id="inputnombre"  /> 
            </div>
            <div>
            <label htmlFor="inputData">Nombre Finca</label>
            <input onChange={mostrarFinca} type="text" className="form-control" id="inputfinca"  /> 
            </div>
            
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
    )
}
export default ModalData;