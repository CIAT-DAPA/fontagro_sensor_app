import {React, useContext} from "react";
import '../assets/styles/modaldata.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from '../context/StaticContex';
function ModalDate({showw,handleClosee}){
    const {inicio, setInicio} = useContext(DataContext);
    const {fin, setFin} = useContext(DataContext);
    const data = localStorage.getItem("datos");
  const datos = JSON.parse(data);
  const fechas = [];
  const porcentaje = [];
  const getData = () => {
    for (let i = 0; i < datos.data.length; i++) {
      fechas.push(datos.data[i].Fecha);
      porcentaje.push(datos.data[i].SW10);
    }
  };
  getData();
  porcentaje.shift();
  fechas.shift();

    const guardarFecha=(e)=>{
        setInicio(e.target.value);  
    }
    const guardarFechaFin=(e)=>{
        setFin(e.target.value);  
    }
    const valueStart= new Date(fechas[0]).toISOString().split('T')[0]
    const valueEnd= new Date(fechas.at(-1)).toISOString().split('T')[0]
    return(
        <div>
            <Modal show={showw} onHide={handleClosee}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese Fecha de Filtro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                     <label htmlFor="startDate">Inicio</label>
                     <input onChange={guardarFecha} id="startDate" className="form-control" type="date"   value={valueStart}  max={valueEnd}/>
                    </div>
                    <div>
                     <label htmlFor="endDate">Fin</label>
                     <input onChange={guardarFechaFin} id="endDate" className="form-control" type="date" value= {valueEnd} max={valueEnd}/>
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
