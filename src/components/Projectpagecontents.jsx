import React from "react";
import project2 from "../images/dbank.png"

function Projectpagecontents() {
    return (
        <section class="dark-bg" id="about">
            <div class="title-container">
                <h2 class="content-title project-content-title">What I've been up to.</h2>
            </div>

            <div class="project-page">
                <div class="mono-font">
                    <a href="https://alicelau926.github.io/SingaporeRestaurants/"><img src="https://alicelau926.github.io/my_website/restaurant.jpg" alt="project1" /></a>
                    <a href="https://alicelau926.github.io/SingaporeRestaurants/">
                        <p class="description">Singapore Restaurant Finder</p>
                    </a>
                </div>

                <div class="mono-font">
                    <a href="https://wqr7k-biaaa-aaaag-aa2oq-cai.ic0.app/"><img src={project2} alt="project2" /></a>
                    <a href="https://wqr7k-biaaa-aaaag-aa2oq-cai.ic0.app/">
                        <p class="description">Web 3.0 - Decentralized Bank</p>
                    </a>
                </div>

                <div class="mono-font">
                    <a href="https://alicelau926.github.io/space-tourism-website/"><img src="https://alicelau926.github.io/my_website/mywebsite.png" alt="project3" /></a>
                    <a href="https://alicelau926.github.io/space-tourism-website/">
                        <p class="description">Space Tourism Multi-page Website</p>
                    </a>

                </div>
            </div>

        </section>
    )
}

export default Projectpagecontents;