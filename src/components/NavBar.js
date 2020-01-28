import React, { useState } from 'react';
import classNames from 'classnames';
import { ResumeDownloadLink, NavItems, SocialLinks } from '../constants/NavBar';
import Logo from '../assets/justin-logo.png';
import Menu from '../assets/Menu';
import './NavBar.scss';

const NavLink = ({navItem, selected, onClick}) =>  {
  const className = selected ? "NavBar-link--selected" : "NavBar-link";

  const onClickLink = () => onClick(navItem.value);

  return (
    <div className={className}>
      <button onClick={onClickLink}>
        {navItem.text}
      </button>
    </div>
  );
};

const NavBar = () => {
  const [selected, setSelected] = useState(NavItems[0].value);
  const [navBarOpen, setNavBarOpen] = useState(false);

  const onClick = (value) => {
    const section = document.getElementById(value);
    setSelected(value);
    setNavBarOpen(false);
    section.scrollIntoView({ behavior: 'smooth', block: 'start'})
  };

  const onControlClick = () => {
    setNavBarOpen(p => !p);
  };

  const onLogoClick = () => onClick(NavItems[0].value);

  const links = NavItems.map(navItem =>
    <NavLink key={navItem.value} navItem={navItem} selected={selected === navItem.value} onClick={onClick} />,
  );

  const socialLinks = SocialLinks.map(socialLink => (
    <a key={socialLink.link} className="NavBar-social-link" href={socialLink.link} target="_blank" rel="noopener noreferrer">
      {socialLink.icon}
    </a>
  ));

  const className = classNames('NavBar-link-container-collapsible', { collapsed: !navBarOpen });

  return (
    <>
      <div className="NavBar">
        <div className="NavBar-link-container">
          <button className="NavBar-icon" onClick={onLogoClick}>
            <img src={Logo} alt="Justin Fangrad Logo" />
          </button>
          {links}
        </div>
        <div className={className}>{links}</div>
        <div className="NavBar-social-links">
          <a className="NavBar-resume" href={ResumeDownloadLink} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          {socialLinks}
          <button className="NavBar-control" onClick={onControlClick}>
            <Menu />
          </button>
        </div>
      </div>
      {/* Placeholder for navbar at the top of the page (pushes everything else down by height of navbar) */}
      <div className="NavBar-placeholder" />
    </>
  );
}

export default NavBar;
