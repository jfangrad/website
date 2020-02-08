import React from 'react';
import ScrollMarker from '../components/ScrollMarker';
import { SkillItems, SkillsDescription } from '../constants/Skills';

import './Skills.scss';

const SkillsItem = ({ icon, altText, title, description }) => (
  <div className="SkillsItem">
    <div className="SkillsItem-icon">
      <img src={icon} alt={altText} />
    </div>
    <div className="SkillsItem-title">{title}</div>
    <div className="SkillsItem-description">{description}</div>
  </div>
);

const Skills = () => (
  <div className="Section Section-Secondary Skills">
    <ScrollMarker sectionId="skills" />
    <div className="Skills-container">
      <div className="Section-header">
        Skills
      </div>
      <div className="Skills-description">
        {SkillsDescription}
      </div>
      <div className="Skills-items-container">
        {SkillItems.map(item => <SkillsItem {...item} key={item.title} />)}
      </div>
    </div>
  </div>
);

export default Skills;
