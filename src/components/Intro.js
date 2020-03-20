import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import JFLogo from '../assets/JF_Logo.gif';
import './Intro.scss';

const Intro = () => {
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowing(false), 4300);
  }, []);

  const className = classNames('Intro', { 'Intro--faded': !showing });
  return (
    <div className={className}>
      <img src={JFLogo} alt="Justin Fangrad logo" />
    </div>
  )
};

export default Intro;
