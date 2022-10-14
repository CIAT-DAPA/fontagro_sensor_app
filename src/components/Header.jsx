import '../assets/styles/header.css'
import {Link} from "react-router-dom"
function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={require('../assets/images/logo-fontagro1.png')}  />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/data">Carga datos sensor</Link>
          </li>
         {/*  <li className="nav-item">
            <Link className="nav-link" to="/personaldata">Datos de suelo</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/visualization">Visualización</Link>
          </li>  
          
        </ul>
      </div>
    </nav>
  );
}

export default Header;