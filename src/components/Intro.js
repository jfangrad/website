import React from 'react';
import classNames from 'classnames';
import JFLogo from '../assets/JF_Logo.gif';
import './Intro.scss';

const Intro = ({ fade }) => {
  const className = classNames('Intro', { 'Intro--faded': fade });
  return (
    <div className={className}>
      <img src={JFLogo} alt="Justin Fangrad logo" />
    </div>
  )
};

export default Intro;
