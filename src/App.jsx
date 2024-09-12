import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './index.css';
import coverB from './assets/coverB.jpg'; // Import the image

function App() {
    return (
        <div className="App">
            <div
                className="w-full h-[100vh]"
                
            >
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
