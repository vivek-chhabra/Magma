import "./Navbar.css";
import React from "react";

export default function Navbar() {
    return (
        <div className="Navbar flex">
            <img src={require("../images/logo.png")} alt="logo" />
            <div className="right flex">
                <div className="demo">Book a Demo</div>
                <i className="fa-solid fa-hamburger"></i>
            </div>
        </div>
    );
}
