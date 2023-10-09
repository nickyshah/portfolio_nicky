import img from '../assets/1.png'
import React from 'react'

export const About = () => {
  return (
    <section className="about container" id="about">
            <h2>About Me</h2>
            <div className="container flex about-content">
                <div className="myImg flex">
                    <img src={img}alt="My Photo"/>
                </div>
                <div className="my-bio">
                    <h2 className="title">Nicky Kumar Shah</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, cumque! Quas quo nesciunt repellat, non necessitatibus odit minima unde est, doloribus dolor velit, repellendus dolore? Ullam reprehenderit facere similique numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laboriosam.

                    </p>
                    <p>
                        Sydney, Australia
                    </p>

                    <div>
                        <div className="tag">
                            <div className="flex">
                                <span>Coding</span>
                                <span>Movie</span>
                                <span>Football</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
  );
};
