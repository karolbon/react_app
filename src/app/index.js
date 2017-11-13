import React from "react";
import ReactDOM from "react-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

const app = document.getElementById('app');

/*

ReactDOM.render(

  (<div>
    <HashRouter>
      <h1>Simple SPA</h1>
      <ul> className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
      </ul>

      <div className="content">
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
      </div>
  </HashRouter>
  </div>)

  ,app);

*/


ReactDOM.render(
  (<div>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>)

, app);
