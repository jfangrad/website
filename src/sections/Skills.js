import React from 'react';
import frontend from '../assets/frontend.svg';
import './Skills.scss';

const SkillsItem = (skillItem) => (
  <div className="SkillsItem">
    <div className="SkillsItem-icon">
      <img src={frontend} alt="frontend icon"/>
    </div>
    <div className="SkillsItem-title">Web Development</div>
    <div className="SkillsItem-description">List the languages & software that you know for each..</div>
  </div>
);

const SkillItems = [

]

const Skills = () => (
  <div className="Section Section-Secondary Skills" id="skills">
    <div className="Skills-container">
      <div className="Section-header">
        Skills
      </div>
      <div className="Skills-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laborum
      </div>
      <div className="Skills-items-container">

      </div>
    </div>
  </div>
);

export default Skills;
