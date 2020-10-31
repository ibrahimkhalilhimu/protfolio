import React from 'react';
import { Container,Row,Col,Image, Button } from 'react-bootstrap';
import './HeaderMain.css'
import img from '../../../himu.png'
import { FaFacebookF, FaLinkedinIn,FaGithub } from 'react-icons/fa';
import { bounceInLeft,bounceInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Typical from 'react-typical'
const styles = {
    bounceInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
  },
  bounceInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
  }
}
const HeaderMain = () => {
    return (
        <div  className="pt-5 mt-5 headerMain">
            <Container>
            <Row>
            <Col md={6} className=" mt-5">
            <StyleRoot>
            <div className="test" style={styles.bounceInLeft}>
            <h3 className="text-white">Hi, I am <br/>
            <span className=" pl-3 text-success">
                <Typical
                loop={Infinity}
                wrapper = "b"
                steps={[
                   " Ibrahim Khalil ",
                    1000,
                    "Front End Developer ",
                    1000,
                   " Designer ",
                   1000
                ]}
                />
            </span>
            </h3><br/>
            <h6 className="text-white">I am Front End developer. I can make any website in React. I am self motivated person. I love to hard work. </h6>
          
            <br/>
           <a href='https://drive.google.com/file/d/1QcCZkBHSVL88IUEJD03nofQ5dxbRPyBA/view?usp=sharing'download="Resume" target="_blank" > <Button variant="outline-success" >Download Resume</Button></a>
           </div>
            </StyleRoot>
            </Col>
            <Col md={6} className="pt-4">
            <StyleRoot>
            <div className="test" style={styles.bounceInUp}>
                <Image style={{width:"400px"}} className="img-fluid" Circle src={img} alt=""/>
                </div>
            </StyleRoot>
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