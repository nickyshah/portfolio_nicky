import React from 'react'

export const Footer = () => {
  return (
    <div>
    <footer class="footer">
    <div class="container">
        <div class="top flex">
            <div class="links ">
            <h3>Links</h3>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
            </div>
            <div class="socials ">
                <h3>Social Links</h3>
                <ul>
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Github</a></li>
                    <li><a href="">Youtube</a></li>
                </ul>
            </div>
        </div>
        
    </div>
    <div class="bottom">
        &copy; All rights reserved. Made by me with 💖
    </div>
</footer>
<a href="#home">
    <div class="go-up flex">
        <i class="fa-solid fa-angle-up"></i>
    </div>
</a>
</div>
  )
}
