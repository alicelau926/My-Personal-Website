import React from "react";
import pp from "../images/pp-outline.PNG"

function Heading() {
    return(
        <div className="heading">
      <div className="center">
        <img className="my-photo" src={pp} alt="my photo" />
      </div>

      <h3 className="bg-text">
        <span> I'm a </span>
        <span className="orange-text"> Web Developer </span>
      </h3>

    </div>
    )
}

export default Heading;