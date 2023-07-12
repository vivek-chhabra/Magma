import "./Home.css";
import React from "react";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <div className="Home flex-column">
            <Navbar />
            <div className="hero-page">
                <video src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2" autoPlay loop muted></video>
                <div className="hero-text flex-column">
                    <h1>Experience Real State Agility</h1>
                    <div className="bottom-text flex">
                        <p>Create a digital twin of your exting building and realise the potential of web3</p>
                        <div className="btn">LEARN MORE</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
