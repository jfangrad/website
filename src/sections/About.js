import React from 'react';
import image from '../assets/justin-image-cropped.png'
import './About.scss';


// TODO: particles.js
const About = () => (
  <div className="Section Section-Primary About">
    <div className="About-info">
      <div className="About-info-name Section-header">
        Justin Fangrad
      </div>
      <div className="About-info-occupation">
        Software Developer
      </div>
      <div className="About-info-description">
        <p>Hello! My name is Justin Fangrad and I am a 4th year computer engineering student at the University of Waterloo and I have had the privilage of working for some great companies and learning a lot along the way.</p>
        <p>I have a wide range of knowledge from web development to low level integrated development. I love to learn new things and am always looking for ways to expand my experience.</p>
      </div>
    </div>
    <div className="About-image">
      <img src={image} alt="Pitcure of Justin Fangrad" />
    </div>
  </div>
);

export default About;
