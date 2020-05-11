import React from 'react';
import classNames from 'classnames';
import JFLogo from '../assets/JF_Logo.gif';
import './Intro.scss';

const Intro = ({ fade, off }) => {
  const className = classNames('Intro', { 'Intro--faded': fade });

  if (off) return null;

  return (
    <div className={className}>
      <img src={JFLogo} alt="Justin Fangrad logo" />
    </div>
  )
};

export default Intro;
