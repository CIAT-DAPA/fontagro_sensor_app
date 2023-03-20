
import {React ,useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from '../context/StaticContex';
function ModalCultivo({showt, handleCloset}){
  const  {nombreC, setNombreC}= useContext(DataContext);
  const [nombre,setNombre]= useState('')
  const mostrarNombre=(e)=>{ 
    setNombre(e.target.value)
    
  }
  const setDatos=()=>{
    setNombreC(nombre)
    handleCloset();
  }
    return(
        <div className='modal'>
            <Modal  show={showt} onHide={handleCloset}>
        <Modal.Header closeButton>
          <Modal.Title>Ingrese el cultivo asociado a este senor</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body' >
            <div>
            <label  htmlFor="inputData">Cultivo</label>
            <input onChange={mostrarNombre} type="text" className="form-control" id="inputnombre"  /> 
            </div>
            <div>
           
            </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={setDatos}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
    )
}
export default ModalCultivo;