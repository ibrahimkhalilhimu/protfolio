import React from 'react';
import './MainNav.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink }from "react-router-dom";
const MainNav = () => {
    return (
      <Container>
      <Navbar className="pt-2" bg="" expand="lg">
      <Navbar.Brand to="home"  className=" text-white">Ibrahim Khalil</Navbar.Brand>
      <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav " />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <NavLink to="/home" activeClassName="mainNav" className="pr-4 text-white pt-2 navLink">Home</NavLink>
          <NavLink to="/about" activeClassName="mainNav" className="pr-4 text-white pt-2 navLink">About</NavLink>
          <NavLink to="/project" activeClassName="mainNav" className="pr-4 text-white pt-2 navLink">Project</NavLink>
          <NavLink to="/blog"  activeClassName="mainNav" className="pr-4 text-white pt-2 navLink">Blog</NavLink>
          <NavLink to="/contact"  activeClassName="mainNav" className="pr-4 text-white pt-2 navLink">Contact</NavLink>
          <a href='https://drive.google.com/file/d/1QcCZkBHSVL88IUEJD03nofQ5dxbRPyBA/view?usp=sharing'download="Resume" target="_blank" > <Button variant="outline-success" >Download Resume</Button></a>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    </Container>
       
    );
};

export default MainNav;