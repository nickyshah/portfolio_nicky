import profilepic from '../assets/1.png'
import React from "react";

export const Hero = () => {
  return (
    <section id="home" className="container hero-section">
      <div className="grid hero">
        <div className="left">
          <div>
            Hi I'm  <strong>Nicky Kumar Shah</strong> 
          </div>
          <strong>Front-End Developer</strong>
          <p>I love coding and love to learn more and more</p>
          <div>
            <a href="./assets/resume.pdf" download="">
              <button className="download-btn">
                Download CV <i className="fa-solid fa-download"></i>{" "}
              </button>
            </a>
          </div>
        </div>
        <div class="right flex">
                    <img src={profilepic} alt="my pic" />
                </div>
      </div>
    </section>
  );
};
