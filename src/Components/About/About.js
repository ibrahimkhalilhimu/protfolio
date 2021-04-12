import React from 'react';
import { Col, Container, Image, Row,Button } from 'react-bootstrap';
import MainNav from '../Home/MainNav/MainNav';
import './About.css'
import img from '../../image.png'
import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Typical from 'react-typical'
import { ThemeSet } from '../../App';
import { useContext } from 'react';

const styles = {
    bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}


const About = () => {
    const [darkTheme, setDarkTheme] =useContext(ThemeSet)

    return (
        <div className="about">
            {/* <MainNav/> */}
            <Container className="pt-5 mt-5">
                <Row className="pt-5">
                <Col md={6}>
                <StyleRoot>
               <div className="test" style={styles.bounceInDown}>
                        <Image style={{width:"200px"}} src={img} thumbnail/>
                        <div className={darkTheme?'text-white':'text-dark'}>
                        <h3 className={darkTheme?'text-white':'text-dark'}>Hi, I am <br/> <span className="text-success pl-5">Ibrahim Khalil</span> </h3>
                        <h4>I am   <Typical
                loop={Infinity}
                wrapper = "b"
                steps={[
                    "Front End Developer ",
                    1000,
                   " Designer ",
                   1000
                ]}
                /></h4>
                        <p>I can make any website in React. I love to work hard. I am Bangladeshi.I am Student now.</p>
                        <a href='https://drive.google.com/file/d/1QcCZkBHSVL88IUEJD03nofQ5dxbRPyBA/view?usp=sharing'download="Resume" target="_blank" > <Button className="bg-success" >Download Resume</Button></a>
                        </div>
                        </div>
                        </StyleRoot>
                       
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
                                <p>Express js</p>
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