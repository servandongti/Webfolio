import React, { Component } from 'react'
import "./Education.css"
import Fade from 'react-reveal/Fade';
import GradImg from "../../assets/images/education-section/graduation-cap.png"
import SchoolImg from "../../assets/images/education-section/school-backpack.png"

export class Education extends Component {
  render() {
    return (
      <div id="education">
        <Fade left>
          <div>
            <h2 className="podcastbg">Education</h2>
            <div className="podcastfr">Education</div>
          </div>
        </Fade>
        <div className="timeline">

          <Fade left>
            <div className="timeline-event timeline-event--type1">
              <div className="timeline-event-icon ">
                <img alt="Graduation" width="80px" src={GradImg} />
              </div>
              <div className="timeline-event-date">
                2020-Present
              </div>
              <div className="timeline-event-content ">
                <div className="timeline-event-title">
                  University
                </div>
                <div className="timeline-event-description">
                  <p >UANL - FIME "SOFTWARE TECHNOLOGY ENGINEERING"<br />
                    Current Score: 8.9</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="timeline-event timeline-event--type2">
              <div className="timeline-event-icon">
                <img alt="School" width="70px" className="SchoolImg" src={SchoolImg} />
              </div>
              <div className="timeline-event-date">
                2018-2020
              </div>
              <div className="timeline-event-content">
                <div className="timeline-event-title">
                  High School
                </div>
                <div className="timeline-event-description">
                  <p>HIGH SCHOOL #7 PUENTES - BILINGUAL<br />
                    Score: 9.4<br />
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="timeline-event timeline-event--type3">
              <div className="timeline-event-icon">
                <img alt="School" width="70px" className="SchoolImg" src={SchoolImg} />
              </div>
              <div className="timeline-event-date">
                2015-2018
              </div>
              <div className="timeline-event-content">
                <div className="timeline-event-title">
                  Junior High School
                </div>
                <div className="timeline-event-description">
                  <p>BILINGUAL COLLEGE FRANCISCO GABILONDO SOLER<br />
                    Score: 9.2 
                  </p>
                </div>
              </div>
            </div>
          </Fade>

        </div>
      </div>
    )
  }
}

export default Education
