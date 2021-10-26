import React from 'react';
import about from '../Img/about.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Lorem Ipsum</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>City of Residence</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Shehrebanu Rashik</p>
                        <p>: 22</p>
                        <p>: USA</p>
                        <p>: Gujarati, Hindi, Arabic</p>
                        <p>: San Francisco, CA</p>
                        
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;