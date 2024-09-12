import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './index.css';
import coverB from './assets/coverB.jpg'; // Import the image
/* In index.css or App.css */
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";


function App() {
    return (
        <div className="App">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${coverB})` }}
            ></div>
             <div className="content">
            <NavBar />
            <Home />
            <About /> 
            <Projects />
            <Contact /> 
            <Footer />
        </div>
        </div> 
    );
}

export default App;
