import React, { Component } from 'react'
import "./WorkExperience.css";
import Fade from 'react-reveal/Fade';
import WebBuilding from "../../assets/images/experience-page/web-building.png"
import uanl from "../../assets/images/experience-page/uanl4.png"


export class WorkExperience extends Component {
    render() {
        return (
            <div id="experiences">

                <Fade left>
                    <div>
                        <div className="exp-Bg">Work Experience</div>
                        <h2 className="exp-Fr">Work Experience</h2>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className="work-exp">
                        <ul className="work-exp-list">

                            <li>
                                <div className="exp">
                                    <img src={uanl} className="exp__image" alt="" />
                                    <div className="exp__overlay">
                                        <div className="exp__header">
                                            <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                                <path />
                                            </svg>
                                            <img alt="devloper" className="exp__thumb" width="60px" src={WebBuilding} />
                                            <div className="exp__header-text">
                                                <h3 className="exp__title">UANL</h3>
                                                <span className="exp__status">Internship<br />
                                                    May' 22 - Sep' 22</span>
                                            </div>
                                        </div>
                                        <p className="exp__description">C#, MySQL, ASP.NET, .NET Framework, Microsoft Power BI, Microsoft SharePoint, Microsoft PowerApps, Power Automate</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default WorkExperience
