import React from "react";
import "../assets/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer id="footer" className="footer-1">
      
      <div className="main-footer widgets-dark typo-light">
      
        {/* <h5 className="participntes">Participantes Principales</h5> */}
        <div className="container">
        
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  CIAT<span></span>
                </h5>
                <a href="https://ciat.cgiar.org/?lang=es"><img
                  className="logos"
                  src={require("../assets/images/CIAT.png")}
                /></a>
                
                <div className="icons-container">
                  <a href="https://es-la.facebook.com/BiovIntCIAT.esp/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://twitter.com/agtechparatodos">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a  className="yt" href="https://www.youtube.com/user/ciatweb">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Visualiti<span></span>
                </h5>
                <a href="https://www.visualiti.co">
                <img
                  className="logos"
                  src={require("../assets/images/logo-visualiti.png")}
                />
                </a>
               
                 <div className="icons-container">
                  <a href="https://www.facebook.com/visualiti">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://twitter.com/visualiti">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  
                  <a className="yt" href="https://www.youtube.com/channel/UCNjXKjyVu2wLZF5J5Oqnobg">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
                
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Zamorano<span></span>
                </h5>
                <a href="https://www.zamorano.edu"><img
                  className="logos"
                  src={require("../assets/images/logo-zamorano.png")}
                /></a>
                
                 <div className="icons-container">
                  <a href="https://www.youtube.com/channel/UCNjXKjyVu2wLZF5J5Oqnobg">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCNjXKjyVu2wLZF5J5Oqnobg">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="yt" href="https://www.youtube.com/channel/UCNQtRC-pseFQN6BtZkYG0zQ">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Fontagro<span></span>
                </h5>
                <a href="https://www.fontagro.org/es/">
                <img
                  className="logos"
                  src={require("../assets/images/logo-fontagro1.png")}
                />
                </a>
               
                 <div className="icons-container">
                  <a href="https://es-la.facebook.com/Fontagro/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://es-la.facebook.com/Fontagro/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="yt" href="https://www.youtube.com/user/fontagro">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
