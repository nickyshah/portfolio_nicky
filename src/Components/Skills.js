import React from 'react'

export const Skills = () => {
  return (<>
            <div className='container' style={{textAlign:"center", marginTop:"2rem",}}><strong style={{fontSize:"2rem"}}>My Skills</strong></div>
     <section className="skills container flex" id="skills">
       
        
            <div className="icon flex">
                <span className="html-color"><i className="fa-brands fa-html5"></i></span>
                <p>HTML</p>
            </div>
            <div className="icon flex">
                <span className="css-color">
                    <i className="fa-brands fa-css3-alt"></i>
                </span>
                <p>CSS</p>
            </div>
            <div className="icon flex">
                <span className="java-color">
                    <i className="fa-brands fa-java"></i>
                </span>
                <p>Javascript</p>
            </div>
            <div className="icon flex">
                <span className="figma-color">
                    <i className="fa-brands fa-figma"></i>
                </span>
                <p>Figma</p>
            </div>
            <div className="icon flex">
                <span className="react-color">
                    <i className="fa-brands fa-react"></i>
                </span>
                <p>React.js</p>
            </div>
            <div className="icon flex">
                <span>
                <i class="fa-brands fa-github"></i>
                </span>
                <p>Github</p>
            </div>
       </section>
       </>
  )
}
