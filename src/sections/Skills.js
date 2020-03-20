import React from 'react';
import ScrollMarker from '../components/ScrollMarker';
import { SkillItems, SkillsDescription } from '../constants/Skills';

import './Skills.scss';

const fadeTypeArray = ['fade-right', 'fade-up', 'fade-left'];

const SkillsItem = ({ icon, altText, title, description, index }) => {
  const fadeType = fadeTypeArray[index]
  return (
    <div className="SkillsItem" data-aos="fade-up">
      <div className="SkillsItem-icon">
        <img src={icon} alt={altText} />
      </div>
      <div data-aos={fadeType}>
        <div className="SkillsItem-title">
          {title}
        </div>
        <div className="SkillsItem-description">
          {description}
        </div>
      </div>
    </div>
  );
}

const Skills = () => (
  <div className="Section Section-Secondary Skills">
    <ScrollMarker sectionId="skills" />
    <div className="Skills-container" data-aos="fade-up">
      <div className="Section-header">
        Skills
      </div>
      <div className="Skills-description">
        {SkillsDescription}
      </div>
      <div className="Skills-items-container">
        {SkillItems.map((item, index) => <SkillsItem {...item} key={item.title} index={index} />)}
      </div>
    </div>
  </div>
);

export default Skills;
