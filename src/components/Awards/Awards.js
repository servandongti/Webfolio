import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Fade from 'react-reveal/Fade'
import "./Awards.css"
import comjswhtmlcss from "../../assets/images/awards-page/comjswhtmlcss.jpg"
import htmlcssboot from "../../assets/images/awards-page/htmlcssboot.jpg"
import phtml5mc from "../../assets/images/awards-page/phtml5mc.jpg"
import phcss3mc from "../../assets/images/awards-page/phcss3mc.jpg"
import phpfbg from "../../assets/images/awards-page/phpfbg.jpg"

class Awards extends Component {
  static get CARD_STYLE() {
    return {
      textAlign: "center",
      background: "#404040",
      color: "#FFF",
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "bold",
      letterSpacing: "0.05rem",
      fontSize: "15px",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }

  render() {
    return (
      <div id="awards"> <Fade left>
        <div>
          <h2 className="awadsBg">Certifications</h2>
          <div className="awadsFg">Certifications</div>
        </div>
      </Fade>
        <Fade bottom>
          <div className="awards">
            <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="WinHacks" src={comjswhtmlcss} />Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2022
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="GfGgoS" src={htmlcssboot} />HTML, CSS, & Bootstrap - Certification Course for Beginners
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="MLSA" src={phtml5mc} />Practical HTML5 Mastery Course
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="MLSA" src={phcss3mc} />Practical CSS3 Mastery Course
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="MLSA" src={phpfbg} />PHP for Beginners 2022: The Complete PHP MySQL PDO Course
              </div>
            </ReactCardCarousel>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Awards
