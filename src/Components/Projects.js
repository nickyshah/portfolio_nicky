import projectimage from '../assets/project.png'
import React from 'react'

export const Projects = () => {
  return (
    <div class="projects container" id="projects">
    <h2>Mr Recent Work</h2>
    <div class="grid project-container">
        <div class="project-card">
            <div class="top">
            <img src={projectimage} alt="portfolio" />
            </div>
            <div class="bottm container">
                <h3>
                    Personal Portfolio Website
                </h3>
                <span>
                    <p>April 2023</p>
                    <div>
                        <a href="" target="_blank"><i class="fa-brands fa-github" style={{color: "blue;"}}></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-chrome" style={{color: "green"}}></i></a>
                    </div>
                
                </span>
                
            </div>
        </div>
        <div class="project-card">
            <div class="top">
                <img src={projectimage} alt="portfolio" />
            </div>
            <div class="bottm container">
                <h3>
                    Personal Portfolio Website
                </h3>
                <span>
                    <p>April 2023</p>
                    <div>
                        <a href="" target="_blank"><i class="fa-brands fa-github" style={{color: "blue;"}}></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-chrome" style={{color: "green"}}></i></a>
                    </div>
                
                </span>
                
            </div>
        </div>
        <div class="project-card">
            <div class="top">
            <img src={projectimage} alt="portfolio" />
            </div>
            <div class="bottm container">
                <h3>
                    Personal Portfolio Website
                </h3>
                <span>
                    <p>April 2023</p>
                    <div>
                        <a href="" target="_blank"><i class="fa-brands fa-github" style={{color: "blue;"}}></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-chrome" style={{color: "green;"}}></i></a>
                    </div>
                
                </span>
                
            </div>
        </div>
        <div class="project-card">
            <div class="top">
            <img src={projectimage} alt="portfolio" />            </div>
            <div class="bottm container">
                <h3>
                    Personal Portfolio Website
                </h3>
                <span>
                    <p>April 2023</p>
                    <div>
                        <a href="" target="_blank"><i class="fa-brands fa-github" style={{color: "blue;"}}></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-chrome" style={{color: "green"}}></i></a>
                    </div>
                
                </span>
                
            </div>
        </div>

    </div>
</div>
  )
}
