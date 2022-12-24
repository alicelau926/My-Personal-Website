import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";


function Home() {
    return (
        <div>
            <section id="title">
                <Heading />
            </section>

            <Arrow />
            <About />
            
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;