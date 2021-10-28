import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from 'react-router-dom';


function Homepage() {
    return (
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi I am 
                    <span> Lorem Ipsum</span>
                </h1>
                <p className = "h-sub-text">
                    lorem Ipsum
                </p>
                <div className="icons">
                <a href="https://www.github.com/Srashik" target="_blank">
                    <GitHubIcon icon={GitHubIcon} size="2x"/>      
                </a> 
                </div>

                </header>

           
        </div>
        
    )
}

export default Homepage
