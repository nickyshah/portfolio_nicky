import profilepic from '../assets/1.png'
import React from "react";

export const Hero = () => {
  return (
    <>
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
      {/* <!-- banner --> */}

      <section class="banner container flex">
        {/* <!-- info  --> */}

        <div class="info-content flex">
          <div class="icon-container flex">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduate</p>
          </div>
        </div>

        {/* <!-- divider --> */}
        <div class="info-divider">

        </div>

        {/* <!-- info --> */}

        <div class="info-content flex">
          <div class="icon-container flex">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>

        {/* <!-- divider --> */}

        <div class="info-divider">

        </div>
        {/* <!-- info --> */}
        <div class="info-content flex">
          <div class="icon-container flex">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1 year </span>
            <p>Coding Experience </p>
          </div>
        </div>
      </section>



    </>
  );
};
