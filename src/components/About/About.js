import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from 'react-reveal/Fade';
import Tilt from "react-parallax-tilt";
import "./About.css";
import myImg from "../../assets/me.jpeg"
import Hi from "../../assets/Hi.gif"
import GitHubImg from "../../assets/images/socials/github1.png"
import LinkedinImg from "../../assets/images/socials/linkedin3.png"
import MediumImg from "../../assets/images/socials/devpost1.png"
import Type from "./Type";

function About() {
    return (
        <Fade bottom duration="2000">
            <Container fluid className="about__section" id="about">
                <Container>
                    <Row>
                        <Col md={8} className="about__description">

                            <div className="text__center">
                                <h1 className="about__intro">Hi <img alt='Hii' src={Hi} width="50px" ></img>, I'm Servando Negrete</h1>
                                <Type />
                            </div>

                            <p className="about__body" >

                                <main id="container">
                                    <div id="terminal">

                                        <section id="terminal__bar">
                                            <div id="bar__buttons">
                                                <button className="bar__button" id="bar__button--exit">&#10005;</button>
                                                <button className="bar__button">&#9472;</button>
                                                <button className="bar__button">&#9723;</button>
                                            </div>
                                            <p id="bar__user">servandongti@ubuntu: ~</p>
                                        </section>

                                        <section id="terminal__body">
                                            <div id="terminal__prompt">
                                                <span id="terminal__prompt--user">servandongti@ubuntu:</span>
                                                <span id="terminal__prompt--location">~</span>
                                                <span id="terminal__prompt--bling">$ about.txt</span>
                                            </div>
                                            <div id="terminal__bio">Hi, my name is Servando Negrete. I am doing my Bachelor of Software Engineering. I'm passionate about working on open source products and enjoy spending my time working on projects, participating in hackathons, and enjoying bringing ideas to life in the browser.<br />
                                                <br />
                                                I am a Full Stack Developer and Machine Learning enthusiast.
                                                <br />
                                                <br />
                                                I love playing around with technology and hopefully creating something that makes people smile.
                                            </div>
                                            <div id="terminal__prompt" >
                                                <span id="terminal__prompt--user">servandongti@ubuntu:</span>
                                                <span id="terminal__prompt--location">~</span>
                                                <span id="terminal__prompt--bling">$</span>
                                                <span id="terminal__prompt--cursor"></span>
                                            </div>
                                        </section>

                                    </div>
                                </main>

                                <a rel="My Resume" href="https://drive.google.com/file/d/1_JPsfFbdvRondOGyX2x21-5BoaipUkaH/view?usp=sharing" target="blank"><div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>CV
                                </div></a>

                            </p>
                            <br />

                            <div className="text_center_link">

                                <a rel="Github" href="https://github.com/servandongti" target="blank">
                                    <img src={GitHubImg} alt="Github" />
                                </a>

                                <a rel="Linkedin" href="https://www.linkedin.com/in/servandongti/" target="blank">
                                    <img src={LinkedinImg} alt="Linkedin" />
                                </a>

                                <a rel="Medium" href="https://devpost.com/servandongti/" target="blank"> <img src={MediumImg} alt="Medium" />
                                </a>

                            </div>

                        </Col>
                        <Col md={4} className="myAvtar">
                            <Tilt>
                                <img src={myImg} className="profile_image" alt="Me" />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Fade>
    );
}
export default About;
