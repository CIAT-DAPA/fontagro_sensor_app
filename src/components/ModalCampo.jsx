import '../assets/styles/modalcampo.css'
import {React,useState, useContext } from 'react';
import { DataContext } from '../context/StaticContex';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCampo({showc, handleClosec}){
    const {contextDatao, setContexDatao} = useContext(DataContext);
    
    
    const mostrarValue=()=>{
       const selectForm= document.getElementById('select'); //getting  values of the select
         setContexDatao(selectForm.value.split(','))   
         
       handleClosec()
    }

    return(
        <>
        <div className='modal'>
            <Modal  show={showc} onHide={handleClosec}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione su tipo de suelo</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body' >
        <select id='select' className="form-select" aria-label="Default select example">
            <option selected>Seleccione un suelo</option>
            <option className="suelo"  value={'9,4,Arenoso'}>Arenoso (A)</option>
            <option className="suelo" value={'14,6,Franco Arenoso'}>Franco Arenoso (FA)</option>
            <option className="suelo" value={'22,15,Franco'}>Franco (F)</option>
            <option className="suelo" value={'30,15,Franco Limoso'}>Franco Limoso (FL)</option>
            <option className="suelo" value={'30,6,Limoso'}>Limoso (L)</option>
            <option className="suelo" value={'40,20,Arcilloso Limoso'}>Arcilloso Limoso (ArL)</option>
            <option className="suelo" value={'21,9,Arenoso Franco'}>Arenoso Franco (AF)</option>
            <option className="suelo" value={'27,13,Franco Arcilloso'}>Franco Arcilloso (FAr)</option>
            <option className="suelo" value={'28,15,Franco Arcilloso Limoso'}>Franco Arcilloso Limoso (FArL)</option>
            <option className="suelo" value={'24,12,Franco Arcillo Arenoso'}>Franco Arcillo Arenoso (FArA)</option>
            <option className="suelo" value={'31,15,Arcillo Arenoso'}>Arcillo Arenoso (ArA)</option>
            <option className="suelo" value={'35,17,Arcilloso'}>Arcilloso (Ar)</option>
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