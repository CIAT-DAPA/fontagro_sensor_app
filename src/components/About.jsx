import {React ,useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/styles/about.css'
function ShowAbout({showa, handleClosea}){
  
    return(
        <div className='modal'>
            <Modal  show={showa} onHide={handleClosea}>
        <Modal.Header closeButton>
          <Modal.Title>Acerca del Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body' >
            <h4>Digitalización de la agricultura de pequeña escala</h4>
            <p className='about-text'>Después de un proceso de diseño participativo, utilizando la metodología de visualización creativa, y luego de la prueba en campo de tres prototipos de solución tecnológica, el proyecto ya cuenta con un diseño de dispositivo para medir humedad de suelo, robusto, de alta usabilidad y bajo costo. El diseño seleccionado cuenta con múltiples mejoras con respecto a los prototipos, manteniendo una autonomía de carga de hasta seis meses en campo, con encendido automático al conectar el sensor, mayor robustez, diseño más elegante y mayor facilidad de descarga de datos y carga del dispositivo. De este sensor se han hecho 90 réplicas, que serán puestas a prueba con productores en los tres países participantes. </p>
            <h4>¿Herramienta de visualización?</h4>
            <p className='about-text'>Al interactuar con los productores participantes del proyecto se ha notado un interes por parte de ellos de participar activamente en el,por esta razon se decidio crear TuFincaStats, una herramienta de visualización  la cual permite al productor cargar los datos de su sensor de humedad, visualizar el coportamiento de humedad en el tiempo que estuvo instalado  el sensor. El productor puede filtar fechas, seleccionar un tipo de campo e ingresar datos personales como su nombre y el de la finca.
                Esta aplicación al ser diseñada para agricultores, se tomó en cuenta el problema de conectividad que pueden presentar, por ello, esta apicación podra seguír funcionando incluso cuando el productor no tenga conexión a internet. </p>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosea} >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
    )
}
export default ShowAbout;