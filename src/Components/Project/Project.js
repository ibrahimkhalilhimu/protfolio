import { React, useState } from 'react';
import { CardDeck, Container, Card, Row, Col, Button } from 'react-bootstrap';
import ProjectData from '../../FakeData/ProjectData'
import './Project.css'
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

const Project = () => {

    const data = ProjectData
    const [projectInfo, setProjectInfo] = useState(data)
    console.log(data);

    return (
        <div className="projectBackground">
            <Container className="pt-5">
                <h2 style={{ borderBottom: "4px solid green" }} className="text-success pt-5">My Project</h2>
                <CardDeck className="pt-4 mt-5">
                    <Row>
                        {
                            projectInfo.map(info =>
                                <Col md={4}>
                                    <StyleRoot>
                                        <div className="test" style={styles.fadeInUp}>
                                            <Card className="mb-4 card">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <div className="inner">
                                                    <Card.Img className="img" variant="top" src={info.img} style={{ width: "100%", height: "200px" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>{info.name}</Card.Title>
                                                    <Card.Text>
                                                        {info.description}
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer className="footer">
                                                    <a href={info.live} target="_blank">
                                                        <Button className="bg-success"> Live Site</Button>
                                                    </a>
                                                    <a className="pl-5" href={info.github} target="_blank">
                                                        <Button className="bg-success">Github</Button>
                                                    </a>
                                                </Card.Footer>
                                            </Card>
                                        </div>
                                    </StyleRoot>
                                </Col>
                            )
                        }
                    </Row>
                </CardDeck>
            </Container>
        </div>
    );
};

export default Project;