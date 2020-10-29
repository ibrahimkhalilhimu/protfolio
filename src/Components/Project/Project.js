import React from 'react';
import { Container } from 'react-bootstrap';
import MainNav from '../Home/MainNav/MainNav';

const Project = () => {
    return (
        <div className="background"> 
                <MainNav/>
            <Container>
                <h3 style={{borderBottom:"4px solid green"}} className="text-success pt-5">My Project</h3>
            </Container>
        </div>
    );
};

export default Project;