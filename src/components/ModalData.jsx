
import '../assets/styles/modaldate.css'
import {React ,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalData({show, handleClose}){
  const [nombre, setNombre] = useState();
  const mostrarNombre=(e)=>{
    setNombre(e.target.value)
    localStorage.setItem('nombre',nombre)
        
  }
  console.log(nombre)
    
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
            <input type="text" className="form-control" id="inputfinca"  /> 
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