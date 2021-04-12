import React from 'react';
import { Button, Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { useState } from 'react';
import TeamProjectData from '../../FakeData/TeamProjectData'
const TeamProject = () => {
    const styles = {
        bounceInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
      }
    }

    const [teamProject,setTeamProject] = useState(TeamProjectData)

    
    return (
        <div className="TeamProjectBackground"> 
    <Container className="pt-5">
        <h2 style={{borderBottom:"4px solid green"}} className="text-success pt-5">My Team Project</h2>
            <CardDeck className="pt-4 mt-5">
                <Row>
                {
                    teamProject.map(data=>
                        <Col md={4}>
                        <StyleRoot>
                        <div className="test" style={styles.bounceInDown}>
                   <Card className="mb-4 card">
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                       <div className="inner">
                      <Card.Img className="img" variant="top" src={data.img} style={{width:"100%",height:"200px"}} />
                      </div>
               <Card.Body>
               <Card.Title>{data.name}</Card.Title>
               <Card.Text>
               {data.description}
               </Card.Text>
               </Card.Body>
               <Card.Footer className="footer">
               <a href={data.live}  target="_blank">
                   <Button className="bg-success"> Live Site</Button>
               </a>
               <a className="pl-5" href={data.github}  target="_blank">
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

export default TeamProject;