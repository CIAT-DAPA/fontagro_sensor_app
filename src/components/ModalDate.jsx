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
  let ini= new Date(inicio)
  let fi= new Date(fin)
  const hasfilter= (inicio && fin) ;
  const filterP= hasfilter ?  datos.data.filter(dato=>new Date(dato.Fecha) > ini && new Date(dato.Fecha) <=fi) : datos.data
  const fechas = filterP.map(dato=>dato.Fecha);
  const porcentaje = filterP.map(dato=>parseFloat(dato.SW10));
  
  datos.data.shift();
    fechas.shift()
   
    const valueStart= new Date(fechas[0]).toISOString().split('T')[0]
    const valueEnd= new Date(fechas.at(-1)).toISOString().split('T')[0]
    if(inicio=='' && fin==''){
        setInicio(valueStart)
        setFin(valueEnd)
    }
    
    const guardarFecha=(e)=>{
        setInicio(e.target.value);  
    }
    
    
    const guardarFechaFin=(e)=>{
        setFin(e.target.value);  
       
        
    }
    
    return(
        <div>
            <Modal show={showw} onHide={handleClosee}>
                `
                <Modal.Header closeButton>
                    <Modal.Title> Ingrese el rango de fechas a filtrar </Modal.Title>
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
