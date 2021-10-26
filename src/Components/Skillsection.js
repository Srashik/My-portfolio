import React from 'react'

function Skillsection({skill,progress, width}) {
    return (
        <div className="Skillsection">
            <div class="skills-container">
                <h5 class="skill-title">{skill}</h5>
                    <div class="skill-bar">
                        <p class="skill-text">{progress}</p>
                        <div class="skill-progress">
                            <div class="progress">
                                <div class="inner-progress" style = {{width:width}}></div>
                            </div>

                        </div>
                    </div>
                
            </div>
            
        </div>
    )
}

export default Skillsection
