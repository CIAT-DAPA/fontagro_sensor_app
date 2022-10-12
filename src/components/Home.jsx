import React from "react";
import '../assets/styles/home.css'
import {Link} from "react-router-dom"

function Home(){  
    return(
      <>
      <div className="home-container">
        
        <p className="text-home">!Holaa¡</p>
        <p className="welcome-text">Aplicación de visualización de fontagro, presiona cargar datos para comenzar</p>
        <button className="btn-load-data "><Link to="/data">Cargar datos</Link></button>
        
      </div>
     
      </>
      
      
    );
};
export default Home;