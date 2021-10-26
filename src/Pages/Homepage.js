import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from 'react-router-dom';
import { Icon } from '@mui/material';

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
                    <Link className="icon-holder"> 
                    <GitHubIcon icon = {GitHubIcon} className="icon GH"/>
                    </Link>
                </div>

                </header>

           
        </div>
        
    )
}

export default Homepage
