
import {React ,useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from '../context/StaticContex';
function ModalData({show, handleClose}){
  const  {nombreP, setNombreP}= useContext(DataContext);
  const {finca, setFinca} = useContext(DataContext);
  const [nombre,setNombre]= useState('')
  const [finc,setFinc]= useState('')
  const mostrarNombre=(e)=>{ 
    setNombre(e.target.value)
    
  }
  const mostrarFinca=(e)=>{
    setFinc(e.target.value)     
  }
  const setDatos=()=>{
    setNombreP(nombre)
    setFinca(finc)
    handleClose()
  }
    return(
        <div className='modal'>
            <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingrese su nombre y el de la finca</Modal.Title>
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
          <Button variant="primary" onClick={setDatos}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
    )
}
export default ModalData;