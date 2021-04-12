import React from 'react';
import './MainNav.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink }from "react-router-dom";
import { useContext } from 'react';
import { ThemeSet } from '../../../App';
const MainNav = ({handleClick}) => {
  const [darkTheme, setDarkTheme] = useContext(ThemeSet)
    return (
      <Container>
      <Navbar className="pt-2" bg="" expand="lg">
      <Navbar.Brand to="home"  className={darkTheme ?'text-white':'text-dark'}>
        Ibrahim Khalil
        
    <span>
    <div className="md-switch md">
      <input type="checkbox" id="text-to-confirm2"
      onClick={handleClick}
       name="text-to-confirm2" title="Register for Text to Confirm" className="md-toggle md-toggle-round"/>
      <label for="text-to-confirm2"></label>
    </div>
    </span>

      </Navbar.Brand>
      <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav " />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <NavLink to="/home" activeClassName="mainNav" className={darkTheme ? 'pr-4 text-white pt-2 navLink' : 'pr-4 text-dark pt-2 navLink'}>Home</NavLink>
          <NavLink to="/about" activeClassName="mainNav" className={darkTheme ? 'pr-4 text-white pt-2 navLink' : 'pr-4 text-dark pt-2 navLink'}>About</NavLink>
          <NavLink to="/project" activeClassName="mainNav" className={darkTheme ? 'pr-4 text-white pt-2 navLink' : 'pr-4 text-dark pt-2 navLink'}>Project</NavLink>
          <NavLink to="/teamProject" activeClassName="mainNav" className={darkTheme ? 'pr-4 text-white pt-2 navLink' : 'pr-4 text-dark pt-2 navLink'}>Team Project</NavLink>
          <NavLink to="/blog"  activeClassName="mainNav" className={darkTheme ? 'pr-4 text-white pt-2 navLink' : 'pr-4 text-dark pt-2 navLink'}>Blog</NavLink>
          <NavLink to="/contact"  activeClassName="mainNav" className={darkTheme ? 'pr-4 text-white pt-2 navLink' : 'pr-4 text-dark pt-2 navLink'}>Contact</NavLink>
          <a href='https://drive.google.com/file/d/1LE1waRJJbf3w74pzD26gvINjZga1-cDr/view?fbclid=IwAR3kdWVtyGC1BB3ao2K3dOe4vaco5illTqHhT7ALq6Xy18_DWReJ9lfhadg'download="Resume" target="_blank" > <Button variant="outline-success" >Download Resume</Button></a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
       
    );
};

export default MainNav;