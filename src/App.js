
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

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home">
        <Home/>
        </Route>
        <Route path="/about">
        <About/>
        </Route>
      <Route path="/project">
        <Project/>
        </Route>
      <Route path="/blog">
        <Blog/>
        </Route>
        <Route path="/contact">
        <Contact/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
      </Switch>
     
    </Router>
  );
}

export default App;
