import {React,useState} from 'react';
import { CardDeck, Container,Card, Row, Col,Button } from 'react-bootstrap';
import MainNav from '../Home/MainNav/MainNav';
import ProjectData from '../../FakeData/ProjectData'
import './Project.css'

const Project = () => {

const data = ProjectData
const [projectInfo,setProjectInfo] = useState(data)
console.log(data);

    return (
        <div className="projectBackground"> 
                <MainNav/>
            <Container className="pt-5">
                <h2 style={{borderBottom:"4px solid green"}} className="text-success pt-5">My Project</h2>
                    <CardDeck className="pt-4 mt-5">
                        <Row>
                        {
                        projectInfo.map(info=>
                            <Col md={4}>
                            <Card className="mb-4 card">
                               <Card.Img variant="top" src={info.img} style={{width:"100%",height:"200px"}} />
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