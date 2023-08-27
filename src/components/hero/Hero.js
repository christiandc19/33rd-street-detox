import React from "react";
import Fade from "react-reveal/Fade";
import "./Hero.css";
// import { Link } from "react-router-dom";
// import { Link as LinkRoll } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="content">
            <Fade bottom>
              <p>Start your treatment journey with us</p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
