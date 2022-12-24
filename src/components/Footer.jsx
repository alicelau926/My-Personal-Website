import React from "react";

function Footer() {

    return (
        <footer>
            <p className="copyright">© Alice Lau 2022 </p>
            <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}
                id="myBtn" type="button" className="btn btn-dark back-to-top-btn">Top <i className="fa-solid fa-arrow-up"></i></button>
        </footer>
    )
}

export default Footer;