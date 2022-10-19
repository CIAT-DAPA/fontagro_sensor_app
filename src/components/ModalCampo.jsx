import '../assets/styles/modalcampo.css'
import {React,useState, useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCampo({showc, handleClosec}){
    const [campo, setCampo] = useState()
    const mostrarValue=()=>{
       const selectForm= document.getElementById('select'); //getting  values of the select
       setCampo(selectForm.value.split(','))   
       handleClosec()
       localStorage.setItem('campos',campo)
    }
    console.log(campo)
    return(
        <>
        <div className='modal'>
            <Modal  show={showc} onHide={handleClosec}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione su tipo de campo</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body' >
        <select id='select' className="form-select" aria-label="Default select example">
            <option selected>Seleccione un campo</option>
            <option  className="suelo"  value='9,4'>Arenoso</option>
            <option className="suelo" value={'14,6'}>Franco Arcilloso</option>
            <option className="suelo" value={'22,10'}>Franca</option>
            <option className="suelo" value={'27,13'}>Franco Arcilloso</option>
            <option className="suelo" value={'24,12'}>Franco Arcillo Arenoso</option>
            <option className="suelo" value={'31,15'}>Arsillo Arenosa</option>
            <option className="suelo" value={'35,17'}>Arcillosa</option>
        </select>     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosec} >
            Cerrar
          </Button>
          <Button variant="primary" onClick={mostrarValue}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
        </>
        
        
        
    )
}
export default ModalCampo;