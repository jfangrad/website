import React from 'react';
import image from '../assets/justin-image-cropped.png'
import './About.scss';

const About = () => (
  <div className="Section Section-Primary About" id="about">
    <div className="About-info">
      <div className="About-info-name Section-header">
        Justin Fangrad
      </div>
      <div className="About-info-occupation">
        Developer
      </div>
      <div className="About-info-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      </div>
    </div>
    <div className="About-image">
      <img src={image} alt="Pitcure of Justin Fangrad" />
    </div>
  </div>
);

export default About;
