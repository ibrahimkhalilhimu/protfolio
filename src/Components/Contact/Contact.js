import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainNav from '../Home/MainNav/MainNav';

const Contact = () => {
    return (
        <div  className="background">
            <MainNav/>
            <Container className="pt-5 mt-5">
                <Row className="pt-5 mt-5">
                    <Col md={6}>
            <form action="">
                <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address "/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name Name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group ">
                           <button style={{padding:"8px 50px"}} type="button" className="btn bg-success text-white"> Send </button>
                           </div>
                </form>
                </Col>
                <Col md={6}>
                    <div className="text-white pl-5 ml-5">
                        <h2 className="text-center">Web Developer</h2><br/>
                    <h3>Name: Ibrahim Khalil</h3>
                    <h3>Phone: +8801874874852</h3>
                    <h3>Email: <small>ibrahimkhalilhemu1@gmail.com</small></h3>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;