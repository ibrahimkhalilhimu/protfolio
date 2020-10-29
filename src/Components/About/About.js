import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import MainNav from '../Home/MainNav/MainNav';
import './About.css'
import img from '../../image.png'
const About = () => {
    return (
        <div className="background">
            <MainNav/>
            <Container className="pt-5 mt-5">
                <Row>
                    <Col md={6}>
                        <Image style={{width:"200px"}} src={img} roundedCircle/>
                        <h3 className="text-white">Hi, I am <br/> <span className="text-success pl-5">Ibrahim Khalil</span> </h3>
                    </Col>
                    <Col md={6}>
                        <div className="center">
                            <h2>My Skills</h2>
                            <div className="skillsBox">
                                <p>Html5</p>
                                <p>90%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width:"90%"}}>  
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBox">
                                <p>Css3</p>
                                <p>80%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width:"80%"}}>  
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBox">
                                <p>Javascript</p>
                                <p>75%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width:"75%"}}>  
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBox">
                                <p>React</p>
                                <p>80%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width:"75%"}}>  
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBox">
                                <p>Node js</p>
                                <p>50%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width:"50%"}}>  
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBox">
                                <p>Express ja</p>
                                <p>50%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width:"50%"}}>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;