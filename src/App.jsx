// import React,{ useEffect }  from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Link } from "react-scroll";
// import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import './index.css';
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";


function App (){
    return(
        <div className="App">
    
            <NavBar />
            <Home />
            <About /> 
            <Projects />
            <Contact /> 
            <Footer />
             
            
                 
          
            
            

        </div>
    );
}
export default App;

