import React from "react";
import { Outlet, Link } from "react-router-dom";


function Navbar() {

  const handleClickScroll = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><i className="fa-sharp fa-solid fa-ice-cream"></i> Alice</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link middle" to="/">Home</Link>
              <Link className="nav-link middle" to="/project">Projects</Link>
              <Link className="nav-link middle" to="/about">About</Link>
              <nav className="navbar-light nav-link">
                <form className="container-fluid justify-content-start">
                  <button onClick={handleClickScroll} className="btn btn-outline-light me-2" type="button">Contact Me</button>
                </form>
              </nav>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;