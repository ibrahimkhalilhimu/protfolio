import React, { useContext } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './HeaderMain.css'
import img from '../../../himu.png'
import { fadeInLeft, fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Typical from 'react-typical';
import { ThemeSet } from '../../../App';
const styles = {
    fadeInLeft: {
        animation: 'x 2s',

        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInRight: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight'),

    }
}


const HeaderMain = () => {

    const [darkTheme, setDarkTheme] = useContext(ThemeSet)
    return (
        <div className="pt-5 mt-5 headerMain">
            <Container>
                <Row>
                    <Col md={6} className=" mt-5">
                        <StyleRoot>
                            <div className="test" style={styles.fadeInLeft}>
                                <h3 className={darkTheme ? 'text-white' : 'text-dark'}>Hi, I am <br />
                                    <span className=" pl-3 text-success">
                                        <Typical
                                            loop={Infinity}
                                            wrapper="b"
                                            steps={[
                                                " Ibrahim Khalil ",
                                                3000,
                                                "Front End Developer ",
                                                3000,
                                                " Designer ",
                                                3000
                                            ]}
                                        />
                                    </span>
                                </h3><br />
                                <h6 className={darkTheme ? 'text-white' : 'text-dark'}>I am Front End developer. I can make any website in React. I am self motivated person. I love to hard work. </h6>

                                <br />
                                <a href='https://drive.google.com/file/d/1LE1waRJJbf3w74pzD26gvINjZga1-cDr/view?fbclid=IwAR3kdWVtyGC1BB3ao2K3dOe4vaco5illTqHhT7ALq6Xy18_DWReJ9lfhadg' download="Resume" target="_blank" > <Button variant="outline-success" >Download Resume</Button></a>
                            </div>
                        </StyleRoot>
                    </Col>
                    <Col md={6} className="pt-4">
                        <StyleRoot>
                            <div className="test" style={styles.fadeInRight}>
                                <Image style={{ width: "400px" }} className="img-fluid" Circle src={img} alt="" />
                            </div>
                        </StyleRoot>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default HeaderMain;