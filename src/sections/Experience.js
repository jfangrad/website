import React from 'react';
import classNames from 'classnames';
import ExternalLink from '../assets/ExternalLink';
import { GroupedExperiences } from '../constants/Experience';
import './Experience.scss';

const ExperienceItem = ({ companyName, companyLink, title, date, description, onRight, shouldRenderDivider }) => {
  const mappedDescriptions = description.map(d => <div className="ExperienceItem-description-item" key={d}>{d}</div>);
  const className = classNames('ExperienceItem', { 'ExperienceItem-on-right': onRight});
  const dividerClassName = classNames('ExperienceItem-divider', {'ExperienceItem-divider-right': onRight});
  return (
    <div className={className}>
      <div className="ExperienceItem-header">
        <a href={companyLink} className='ExperienceItem-company-name' target="_blank" rel="noopener noreferrer">
          {companyName}
          {companyName && <ExternalLink />}
        </a>
        <div className="ExperienceItem-date">{date}</div>
      </div>
      <div className="ExperienceItem-job-title">{title}</div>
      <div className="ExperienceItem-description">{mappedDescriptions}</div>
      {shouldRenderDivider && <div className={dividerClassName} />}
    </div>
  );
};

const Experience = () => {

  const renderExperienceItems = (group, rowIndex) => {
    const shouldRenderDivider = rowIndex !== GroupedExperiences.length - 1;
    return (
      <div className="Experience-row" key={rowIndex}>
        {group.map((item, index) =>
          <ExperienceItem
            {...item}
            onRight={index === 1}
            key={`${item.companyName} ${item.date}`}
            shouldRenderDivider={shouldRenderDivider}
          />,
        )}
      </div>
    );
  };

  return (
    <div className="Section Section-Primary Experience" id="experience">
      <div className="Experience-background" />
      <div className="Experience-container">
        <div className="Section-header">
          Experience
        </div>
        <div className="Experience-items-container">
          {GroupedExperiences.map(renderExperienceItems)}
        </div>
      </div>
    </div>
  );
};

export default Experience;
