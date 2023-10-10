import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header id='navbar'>
        <nav className="container flex navigation">
            <div className="flex nav-left">
                <h1>Nicky </h1>
                <div className="line">Soft. Engineer</div>
            </div>
            <div className="menu">
                <ul className="flex">
                    {/* <li><a href="#home">Home</a></li> */}
                    <li> <NavLink to="/" activeStyle> Home </NavLink></li>
                    <li> <NavLink to="skills" activeStyle> Skills </NavLink></li>
                    <li> <NavLink to="projects" activeStyle> Projects </NavLink></li>
                    <li> <NavLink to="about" activeStyle> About </NavLink></li>
                    <li> <NavLink to="contact" activeStyle> Contact </NavLink></li>
                    {/* <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li> */}
                </ul>
            </div>

        </nav>
    </header>
  );
};
