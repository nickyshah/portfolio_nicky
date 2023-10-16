import projectimage from '../assets/project.png'
import prank_calculator from '../assets/prank_calculator.png'
import parallax from '../assets/parallax.png'
import Nottodolist from '../assets/Not-to-do-list.png'
import digital_clock from '../assets/digital_clock.png'
import react_movie_app from '../assets/react_movie_app.png'

import React from 'react'

export const Projects = () => {
    return (
        <div class="projects container" id="projects">
            <h2>Mr Recent Work</h2>
            <div class="grid project-container">
                <div class="project-card">
                    <div class="top">
                        <img src={prank_calculator} alt="portfolio" />
                    </div>
                    <div class="bottm container">
                        <h3>
                            Prank Calculator
                        </h3>
                        <span>
                            <p> September 2023</p>
                            <div>
                                <a href="https://github.com/nickyshah/Prank_Calculator" target="_blank"><i class="fa-brands fa-github" style={{ color: "blue;" }}></i></a>
                                <a href="https://nickyshah.github.io/Prank_Calculator/" target="_blank"><i class="fa-brands fa-chrome" style={{ color: "green" }}></i></a>
                            </div>

                        </span>

                    </div>
                </div>
                <div class="project-card">
                    <div class="top">
                        <img src={parallax} alt="portfolio" />
                    </div>
                    <div class="bottm container">
                        <h3>
                            Parallax
                        </h3>
                        <span>
                            <p>August 2023</p>
                            <div>
                                <a href="https://github.com/nickyshah/Parallax" target="_blank"><i class="fa-brands fa-github" style={{ color: "blue;" }}></i></a>
                                <a href="https://nickyshah.github.io/Parallax/" target="_blank"><i class="fa-brands fa-chrome" style={{ color: "green" }}></i></a>
                            </div>

                        </span>

                    </div>
                </div>
                <div class="project-card">
                    <div class="top">
                        <img src={Nottodolist} alt="portfolio" />
                    </div>
                    <div class="bottm container">
                        <h3>
                            Not To-Do List
                        </h3>
                        <span>
                            <p>September 2023</p>
                            <div>
                                <a href="https://github.com/nickyshah/Not-To-d0-List-by-Bootstrap" target="_blank"><i class="fa-brands fa-github" style={{ color: "blue;" }}></i></a>
                                <a href="https://nickyshah.github.io/Not-To-d0-List-by-Bootstrap/" target="_blank"><i class="fa-brands fa-chrome" style={{ color: "green" }}></i></a>
                            </div>

                        </span>

                    </div>
                </div>
                <div class="project-card">
                    <div class="top">
                        <img src={digital_clock} alt="portfolio" />            </div>
                    <div class="bottm container">
                        <h3>
                            Digital Clock
                        </h3>
                        <span>
                            <p>September 2023</p>
                            <div>
                                <a href="https://github.com/nickyshah/Digital-Clock-" target="_blank"><i class="fa-brands fa-github" style={{ color: "blue;" }}></i></a>
                                <a href="https://nickyshah.github.io/Digital-Clock-/" target="_blank"><i class="fa-brands fa-chrome" style={{ color: "green" }}></i></a>
                            </div>

                        </span>

                    </div>
                </div>
                <div class="project-card">
                    <div class="top">
                        <img src={react_movie_app} alt="portfolio" />            </div>
                    <div class="bottm container">
                        <h3>
                            Movie_API_React
                        </h3>
                        <span>
                            <p>October 2023</p>
                            <div>
                                <a href="https://github.com/nickyshah/react_movie_api" target="_blank"><i class="fa-brands fa-github" style={{ color: "blue;" }}></i></a>
                                <a href="https://react-movie-api-wheat.vercel.app/" target="_blank"><i class="fa-brands fa-chrome" style={{ color: "green" }}></i></a>
                            </div>

                        </span>

                    </div>
                </div>

            </div>
        </div>
    )
}
