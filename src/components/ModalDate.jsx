import {React} from "react";
import '../assets/styles/modaldata.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalDate({showw,handleClosee}){
    const Mostrar=(e)=>{
        const date =e.target.value;
        console.log(date)
         //getting value of date
    }
    return(
        <div>
            <Modal show={showw} onHide={handleClosee}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese Fecha de siembra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label htmlFor="inputDate">Fecha</label>
                        <input onChange={Mostrar} type="date" className="form-control" id="inputdate"  /> 
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
