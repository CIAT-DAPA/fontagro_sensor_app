import React from "react";
import "../assets/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <p className="text-partners">Participantes</p>
      
      <div className="main-footer widgets-dark typo-light">
        {/* <h5 className="participntes">Participantes Principales</h5> */}
        <div className="container">
        
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="">
                  CIAT<span></span>
                </h5>
                <a href="https://ciat.cgiar.org/?lang=es" target="_blank"><img
                  className="logos"
                  src={require("../assets/images/logo-ciat.png")}
                /></a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="">
                  Visualiti<span></span>
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
                  Zamorano<span></span>
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
                  Fontagro<span></span>
                </h5>
                <a href="https://www.fontagro.org/es/" target="_blank">
                <img
                  className="logos"
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
