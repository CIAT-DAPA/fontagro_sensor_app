import React from "react";
import '../assets/styles/home.css'

function Home(){  
    return(
      <div className="home-container">
        <p className="text-home">!Hola¡</p>
        <p className="welcome-text">Bienvenido a la app de visuaización de fontagro, presiona siguiente para comenzar.</p>
        <button className="next-button-home">Siguiente</button>
      </div>
    );
};
export default Home;