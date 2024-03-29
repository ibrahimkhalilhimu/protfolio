import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ThemeSet } from '../../App';
import { fadeInLeft, fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
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


const Contact = () => {
    const [darkTheme, setDarkTheme] = useContext(ThemeSet);
    return (
        <div className="background">

            <Container className="pt-5 mt-5">
                <Row className="pt-5 mt-5 text-center">

                    <Col md={6}>
                        < StyleRoot>
                            <div className="test" style={styles.fadeInLeft}>
                                <form action="https://formspree.io/f/xeqpkakr" method="POST">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name Name" id="name" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="text" className="form-control" id="" cols="30" rows="10" placeholder="Your message" required></textarea>
                                    </div>
                                    <div className="form-group ">
                                        <button style={{ padding: "8px 50px" }} type="submit" className="btn bg-success text-white"> Send </button>
                                    </div>
                                </form>
                            </div>
                        </StyleRoot>
                    </Col>
                    <Col md={6} >
                        <StyleRoot>
                            <div className="test" style={styles.fadeInRight}>
                                <div className={darkTheme ? 'text-white   contactSection' : 'text-dark contactSection'}>
                                    <h2 style={{ borderBottom: "2px solid green" }}>Web Developer</h2><br />
                                    <h3>Name: Ibrahim Khalil</h3>
                                    <h3>Phone: +8801874874852</h3>
                                    <h3>Email: <small>ibrahimkhalilhemu1@gmail.com</small></h3>
                                </div>
                            </div>
                        </StyleRoot>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;