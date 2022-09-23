import '../assets/styles/header.css'
function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={require('../assets/images/logo-fontagro1.png')}  />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Carga datos sensor</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Datos Personales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Visualización</a>
          </li>  
        </ul>
      </div>
    </nav>
  );
}

export default Header;