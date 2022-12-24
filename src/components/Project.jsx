import React, { useState } from "react";
import project2 from "../images/dbank.png"
import 'animate.css';

function Project() {

    const [display, setDisplay] = useState(false);

    return (
        <section id="featured-projects">
            <div className="title-container">
                <h2 className="content-title"> Featured Projects </h2>
                <p>Here's a selection of some recent projects.</p>
            </div>

            <div className="center">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://alicelau926.github.io/SingaporeRestaurants/"><img src="https://alicelau926.github.io/my_website/restaurant.jpg" className="d-block w-100" alt="project1" /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <a href="https://alicelau926.github.io/SingaporeRestaurants/">
                                    <h5>Singapore Restaurant Finder</h5>
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://wqr7k-biaaa-aaaag-aa2oq-cai.ic0.app/"><img src={project2} className="d-block w-100" alt="project2" /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <a href="https://wqr7k-biaaa-aaaag-aa2oq-cai.ic0.app/">
                                    <h5>Web 3.0 - Decentralized Bank</h5>
                                </a>


                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://alicelau926.github.io/space-tourism-website/"><img src="https://alicelau926.github.io/my_website/mywebsite.png" className="d-block w-100" alt="project3" /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <a href="https://alicelau926.github.io/space-tourism-website/">
                                    <h5>Space Tourism Multi-page Website</h5>
                                </a>


                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className="show-xs">
                <div className="mono-font">
                    <a href="https://alicelau926.github.io/SingaporeRestaurants/"><img src="https://alicelau926.github.io/my_website/restaurant.jpg" alt="project1" /></a>
                    <a href="https://alicelau926.github.io/SingaporeRestaurants/"><p className="description">Singapore Restaurant Finder</p></a>
                </div>

                <div className="animate__animated animate__fadeIn" style={{display: display ? "block" : "none"}}>
                <div className="mono-font">
                    <a href="https://wqr7k-biaaa-aaaag-aa2oq-cai.ic0.app/"><img src={project2} alt="project2" /></a>
                    <a href="https://wqr7k-biaaa-aaaag-aa2oq-cai.ic0.app/"><p className="description">Web 3.0 - Decentralized Bank</p></a>
                </div>

                <div className="mono-font">
                    <a href="https://alicelau926.github.io/space-tourism-website/"><img src="https://alicelau926.github.io/my_website/mywebsite.png" alt="project3" /></a>
                    <a href="https://alicelau926.github.io/space-tourism-website/"> <p className="description">Space Tourism Multi-page Website</p></a>
                </div>
                </div>

                <button className="btn btn-outline-light btn-sm" onClick={() => setDisplay(!display)}>{display? "Show Less" : "Show More"}</button>

            </div>

        </section>
    )
}

export default Project;