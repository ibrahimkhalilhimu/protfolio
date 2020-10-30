import React from 'react';
import { Container,Row,Col,Image, Button } from 'react-bootstrap';
import './HeaderMain.css'
import img from '../../../himu.png'
import { FaFacebookF, FaLinkedinIn,FaGithub } from 'react-icons/fa';
const HeaderMain = () => {
    return (
        <div  className="pt-5 mt-5 headerMain">
            <Container>
            <Row>
            <Col md={6} className=" mt-5">
            <h3 className="text-white">Hi, I am <br/><span className=" pl-3 text-success">Ibrahim Khalil</span></h3><br/>
            <h6 className="text-white">I am Front End developer. I can make any website in React. I am self motivated person. I love to hard work. </h6>
            <br/>
           <a href='https://drive.google.com/file/d/1QcCZkBHSVL88IUEJD03nofQ5dxbRPyBA/view?usp=sharing'download="Resume" target="_blank" > <Button variant="outline-success" >Download Resume</Button></a>
            </Col>
            <Col md={6} className="pt-4">
                <Image style={{width:"400px"}} className="img-fluid" Circle src={img} alt=""/>
            </Col>
            </Row>
            <div className="header">
                <ul>
                    <li>
                    <a href="https://www.linkedin.com/in/ibrahim-khalil-8788b61ba/" target="_blank"> <FaLinkedinIn style={{width:"40px",height:"40px"}}/></a> 
                    </li>
                    <li>
                       <a href="https://github.com/ibrahimkhalilhimu" target="_blank"><FaGithub style={{width:"40px",height:"40px"}}/></a> 
                    </li>
                    <li>
                        <FaFacebookF style={{width:"40px",height:"40px"}}/>
                    </li>
                </ul>
            </div>
            </Container>
        </div>
    );
};

export default HeaderMain;