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
            <h4>Digitalización de la Agricultura de pequeña escala</h4>
            <p className='about-text'>Después de un proceso de diseño participativo, utilizando la metodología de visualización creativa, y luego de la prueba en campo de tres prototipos de solución tecnológica, el proyecto ya cuenta con un diseño de dispositivo para medir humedad de suelo, robusto, de alta usabilidad y bajo costo. El diseño seleccionado cuenta con múltiples mejoras con respecto a los prototipos, manteniendo una autonomía de carga de hasta seis meses en campo, con encendido automático al conectar el sensor, mayor robustez, diseño más elegante y mayor facilidad de descarga de datos y carga del dispositivo. De este sensor se han hecho 90 réplicas, que están instaladas en cultivos de de productores de la región en los paises de, Colombia, Honduras y Nicaragua. </p>
            <div className='img-container'>
            <img className='sensor container' src={require('../assets/images/ubicación.png')} />

            </div>
            <p>
            En Colombia, por ejemplo, con el acompañamiento de Jimmy Mañunga el consultor líder de la zona, se realizó el despliegue del dispositivo en cultivos de Café, Maíz y Frijol, en las veredas de San Antonio, San Rafael, Los Cerrillos, y las Mercedes, en el noroccidente del municipio de Popayán departamento del Cauca, como se puede ver en la siguiente imagen:
            </p>
            <div className='img-container'>
            <img className='sensor container' src={require('../assets/images/colombia.png')} />

            </div>
            <p>Por su parte, en Nicaragua, con el despliegue liderado por liderada por Jahnnier Eduardo, se realizó la instalación en Maíz, fríjol, café y tabaco en tres departamentos diferentes. Gracias al apoyo de la cooperativa Mira Flor y la cooperativa Buculmay que se instalaron 10 sensores en el municipio de Santa Maria de Pantasma, departamento de Jinotega.  Gracias a la cooperativa Compare fue posible instalar 10 sensores en el municipio de Condega, departamento de Estelí. Y los últimos 10 se instalaron con ayuda de la cooperativa CCAJ en el municipio de Jalapa, departamento de Nueva Segovia.</p>
            <div className='img-container'>
            <img className='sensor container' src={require('../assets/images/nica.png')} />

            </div>
            <p>Y finalmente, en Honduras, contando con el acompañamiento de Reyneiro Barahona, consultor líder de la zona. Se realizó el despliegue en cultivos de Maíz, Frijol, aguacate y Sorgo Forrajero, en las comunidades del municipio de San Antonio de Oriente en el departamento de Francisco Morazán.</p>
            <div className='img-container'>
            <img className='sensor container' src={require('../assets/images/honduras.png')} />

            </div>
            <p>La solución tecnológicas, es un dispositivo robusto, de bajo costo y alta usabilidad, que permite medir la humedad del suelo. El dispositivo cuenta con autonomía de carga de hasta seis meses en campo y cuenta con descarga fácil de los datos sin necesidad de conectividad remota. </p>
            <div className='img-container'>
            <img className='sensor container' src={require('../assets/images/sensor.jpeg')} />

            </div>
            <h4>Herramienta de visualización</h4>
            
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