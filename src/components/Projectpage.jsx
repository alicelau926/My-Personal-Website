import React from "react";
import Projectpagetitle from "./Projectpagetitle";
import Projectpagecontents from "./Projectpagecontents";
import Contact from "./Contact";
import Footer from "./Footer";

function Projectpage() {
    return (
        <div>
            <Projectpagetitle />
            <Projectpagecontents />
            <Contact />
            <Footer />
        </div>
    )
}

export default Projectpage;