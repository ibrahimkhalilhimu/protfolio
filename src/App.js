import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import TeamProject from './Components/TeamProject/TeamProject';
import { createContext } from 'react';
import MainNav from './Components/Home/MainNav/MainNav';
import { useState } from 'react';

export const ThemeSet = createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const handleClick = () => {
    setDarkTheme(prevTheme => !prevTheme)
}
  return (
  <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
    <ThemeSet.Provider value={[darkTheme, setDarkTheme]}>
      <Router>
      <Switch>
      <Route path="/home">
        <MainNav  handleClick={handleClick}/>
        <Home/>
        </Route>
        <Route path="/about">
        <MainNav  handleClick={handleClick}/>
        <About/>
        </Route>
      <Route path="/project">
      <MainNav  handleClick={handleClick}/>
        <Project/>
        </Route>
        <Route path="/teamProject">
        <MainNav  handleClick={handleClick}/>
        <TeamProject/>
        </Route>
      <Route path="/blog">
      <MainNav  handleClick={handleClick}/>
        <Blog/>
        </Route>
        <Route path="/contact">
        <MainNav  handleClick={handleClick}/>
        <Contact/>
        </Route>
        <Route exact path="/">
        <MainNav  handleClick={handleClick}/>
        <Home/>
        </Route>
      </Switch>  
    </Router>
    </ThemeSet.Provider>
  </div>
  );
}

export default App;
