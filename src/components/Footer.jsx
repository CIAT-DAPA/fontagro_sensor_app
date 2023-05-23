import React from "react";
import "../assets/styles/footer.css";
function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <p className="text-partners">Participantes</p>  
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
        
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="">
                  <span></span>
                </h5>
                <a href="https://ciat.cgiar.org/?lang=es" target="_blank"><img
                  className="logo-ciat"
                  src={require("../assets/images/ciat-logo.png")}
                /></a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="">
                  <span></span>
                </h5>
                <a href="https://www.visualiti.co" target="_blank">
                <img
                  className="logos"
                  src={require("../assets/images/logo-visualiti.png")}
                />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="">
                  <span></span>
                </h5>
                <a href="https://www.zamorano.edu" target="_blank"><img
                  className="logos"
                  src={require("../assets/images/logo-zamorano.png")}
                /></a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="">
                  <span></span>
                </h5>
                <a href="https://www.fontagro.org/es/" target="_blank">
                <img
                  className="logos-f"
                  src={require("../assets/images/logo-fontagro1.png")}
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
