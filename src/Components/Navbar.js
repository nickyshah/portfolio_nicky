import React from 'react'
import { Link} from 'react-router-dom'

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
                    <li> <Link to="/" activeStyle> Home </Link></li>
                    <li> <Link to="skills" activeStyle> Skills </Link></li>
                    <li> <Link to="projects" activeStyle> Projects </Link></li>
                    <li> <Link to="about" activeStyle> About </Link></li>
                    <li> <Link to="contact" activeStyle> Contact </Link></li>
                    {/* <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li> */}
                </ul>
            </div>

        </nav>
    </header>
  );
};
