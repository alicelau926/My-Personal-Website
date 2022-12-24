import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style.css";
import Favicon from 'react-favicon'
import fav from "./images/favicon.ico"

ReactDOM.render(
    <div>
        <Favicon url={fav} />
        <App />
    </div>,
    document.getElementById("root")
);
