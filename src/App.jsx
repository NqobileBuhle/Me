import React from "react";
import { Link } from "react-scroll";  // Ensure this is imported correctly
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
            {/* Background Image */}
            <div
                className="w-full h-[100vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${coverB})` }}
            >
                {/* Navigation Bar */}
                <NavBar />
                
                {/* Sections with IDs for smooth scrolling */}
                <Home id="Intro" />
                <About id="About" /> 
                <Projects id="Projects" />
                <Contact id="Contact" /> 
                <Footer />
            </div>
        </div>
    );
}

export default App;

