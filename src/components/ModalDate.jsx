import {React, useContext} from "react";
import '../assets/styles/modaldata.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from '../context/StaticContex';
function ModalDate({showw,handleClosee}){
    const {inicio, setInicio} = useContext(DataContext);
    const {fin, setFin} = useContext(DataContext);

    const guardarFecha=(e)=>{
        setInicio(e.target.value);  
    }
    const guardarFechaFin=(e)=>{
        setFin(e.target.value);  
    }
    return(
        <div>
            <Modal show={showw} onHide={handleClosee}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese Fecha de Filtro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                     <label htmlFor="startDate">Inicio</label>
                     <input onChange={guardarFecha} id="startDate" className="form-control" type="date" value='2022-12-17'/>
                    </div>
                    <div>
                     <label htmlFor="endDate">Fin</label>
                     <input onChange={guardarFechaFin} id="endDate" className="form-control" type="date" />
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
