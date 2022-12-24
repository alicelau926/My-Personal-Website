import React from "react";
import webdesign from "../images/webdesign.svg";
import webdevelopment from "../images/webdevelopment.svg"

function About() {
    return (
        <section className="dark-bg" id="about">
            <div className="title-container">
                <h2 className="content-title" style={{ paddingBottom: "5%" }}>I Can Help You With...</h2>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <span className="">01.</span> <br />
                        <div className="line"></div> <br />
                        <span className="mono-font">Development {"{"} </span> <br />
                        <div className="mono-font tab-text">I create responsive websites: to run across devices using the latest technologies available;</div>
                        <span className="mono-font"> {"}"} </span>
                    </div>
                    <div className="col svg-col">
                        <object type="image/svg+xml" data={webdevelopment}></object>

                    </div>
                </div>

                <div className="row">
                    <div className="col svg-col">
                        <object style={{paddingRight: "50px"}} type="image/svg+xml" data={webdesign}></object>
                    </div>
                    <div className="col lower-col">
                        <span>02.</span> <br />
                        <div className="line"></div> <br />
                        <span className="mono-font">Design {"{"}</span> <br />
                        <div className="mono-font tab-text">I'm a creative developer: create simple & appealing websites, focusing on typography, content and conveying message;</div>
                        <span className="mono-font"> {"}"} </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;