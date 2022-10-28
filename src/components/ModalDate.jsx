import {React, useContext} from "react";
import '../assets/styles/modaldata.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from '../context/StaticContex';
function ModalDate({showw,handleClosee}){
    const {contextDatau, setContexDatau} = useContext(DataContext);
    const Mostrar=(e)=>{
        const date =e.target.value;
        
         //getting value of date
    }
    return(
        <div>
            <Modal show={showw} onHide={handleClosee}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese Fecha de Filtro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                     <label for="startDate">Inicio</label>
                     <input id="startDate" className="form-control" type="date" value='2022-12-17'/>
                    </div>
                    <div>
                     <label for="endDate">Fin</label>
                     <input id="endDate" className="form-control" type="date" />
                    </div>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClosee}>
                        Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleClosee}>
                        Guardar
                        </Button>
                    </Modal.Footer>
             </Modal>
        </div>
    )
}
export default ModalDate;
