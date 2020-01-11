import React, { useState } from 'react';
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

const NavItems = [
  { text: 'About', value: 'about' },
  { text: 'Skills', value: 'skills' },
  { text: 'Experience', value: 'experience' },
  { text: 'Projects', value: 'projects' },
];

const NavBar = () => {
  const [selected, setSelected] = useState(NavItems[0].value);

  const onClick = (value) => {
    const section = document.getElementById(value);
    setSelected(value);
    section.scrollIntoView({ behavior: 'smooth', block: 'start'})
  };

  const links = NavItems.map(navItem =>
    <NavLink navItem={navItem} selected={selected === navItem.value} onClick={onClick} />,
  );

  return (
    <div className="NavBar">
      <div className="NavBar-link-container">
        {links}
      </div>
    </div>
  );
}

export default NavBar;
