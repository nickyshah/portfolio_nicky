import React from 'react'

export const Contact = () => {
    return (
        <section class="container contact" id="contact">
            <h2 class="title ">
                <span>
                    Get In Touch
                </span>
            </h2>
            <div class="social flex">

                <a href="https://www.linkedin.com/in/nicky-shah/" target="_blank">
                    <i class="fa-brands fa-linkedin" style={{color:"blue"}}></i>
                </a>
                <a href="https://github.com/" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="youtube.com" target="_blank">
                    <i class="fa-brands fa-youtube" style={{color:"red"}}></i>
                </a>
                
                <a href="tel:0406881676">
                    <i class="fa-solid fa-mobile"style={{color:"black"}}></i>
                </a>

            </div>
            
            <h3>OR</h3>
            
            <a href="mailto:nickshah534@gmail.com">
                <div class="email-section flex">
                    <div class="email flex">
                        <span>nickshah534@gmail.com</span>
                        <div class="send flex">
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                    
                </div>
            </a>

            
        </section>
    )
}
