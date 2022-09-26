import React, { Component } from 'react'
import "./Projects.css"
import Fade from 'react-reveal/Fade';
import GitHub from "../../assets/images/project-page/github1.png"
import EduAR from "../../assets/images/project-page/cryptoprice7.jpg"
import Signal from "../../assets/images/project-page/rappi7.jpg"
import Minecraft from "../../assets/images/project-page/covidapp.jpg"

export class Projects extends Component {
    render() {
        return (
            <>
                <div id="projects">

                    <Fade left>
                        <div>
                            <h2 className="projectbg">Projects</h2>
                            <div className="projectfr">Projects</div>
                        </div>
                    </Fade>

                    <Fade bottom cascade>
                        <section id="main">
                            <div class="container_proj">

                                <div className="card">
                                    <div className="imgBx">
                                        <img src={EduAR} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="contentBx" >
                                            <h3 className="text-black">CryptoPrice <br /><span
                                            >(React Native)<br />An app to know the prices of all cryptocurrencies at the moment.
                                            </span></h3>
                                        </div>
                                        <ul className="sci">
                                            <li>
                                                <a rel="noreferrer" href="https://github.com/servandongti/CryptoPrice" target="_blank"><img alt="github" width="45px" height="45px" src={GitHub} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="imgBx">
                                        <img src={Signal} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="contentBx" >
                                            <h3 className="text-black">RappiClone<br /><span
                                            >(React Native, Expo)<br />A clone of the famous rappi food delivery app.
                                            </span></h3>
                                        </div>
                                        <ul className="sci">
                                            <li>
                                                <a rel="noreferrer" href="https://github.com/servandongti/RappiClone" target="_blank"><img alt="github" width="45px" height="45px" src={GitHub} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="imgBx">
                                        <img src={Minecraft} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="contentBx" >
                                            <h3 className="text-black">CovidCases<br /><span
                                            >(React Native)<br />A simple app to detect covid cases in the user area.
                                            </span></h3>
                                        </div>
                                        <ul className="sci">
                                            <li>
                                                <a rel="noreferrer" href="https://github.com/servandongti/CovidCases" target="_blank"><img alt="github" width="45px" height="45px" src={GitHub} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </section>
                    </Fade>
                </div>

                <Fade bottom>
                    <div className="btn_center">
                        <a href="https://github.com/servandongti" target="blank"><div className="btn" style={{ color: "white" }}>More Projects
                            <div className="btn2"></div>
                        </div></a>
                    </div>
                </Fade>

            </>

        )
    }
}

export default Projects
