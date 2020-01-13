import React from 'react';
import frontend from '../assets/frontend.svg';
import programming from '../assets/programming.svg';
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

const SkillItems = [
  {
    icon: frontend,
    altText: 'Frontend development icon',
    title: 'Web development',
    description: 'Extensive knowledge and experience with web development techologies including JavaScript, TypeScript, React, NodeJS, Express and others',
  },
  {
    icon: frontend,
    altText: 'Mobile development icon',
    title: 'Mobile development',
    description: 'Mobile development experience in Android using Java as well as Android and ios using React Native',
  },
  {
    icon: programming,
    altText: 'General development icon',
    title: 'General programming',
    description: 'Additional experience with C/C++, python, as well as database systems including MongoDB, MySQL, Neo4J, and Firebase',
  },
]

const Skills = () => (
  <div className="Section Section-Secondary Skills" id="skills">
    <div className="Skills-container">
      <div className="Section-header">
        Skills
      </div>
      <div className="Skills-description">
        Through my computer engineering degree, work experience, and own personal projects, I have gained experience in many areas of development. Some of these areas include web, mobile, and integrated development.
      </div>
      <div className="Skills-items-container">
        {SkillItems.map(item => <SkillsItem {...item} key={item.title} />)}
      </div>
    </div>
  </div>
);

export default Skills;
