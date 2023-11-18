import { useState } from 'react';
import './HeaderNav.css';

export default function HeaderNav() {
  const [visible, setVisible] = useState(false);

  const toggleNav = () => {
    setVisible((old) => !old);
  };

  return (
    <>
      <nav className={`header-nav ${visible ? 'header-nav_opened' : ''}`}>
        <div className="header-nav__item">ABOUT ME</div>
        <div className="header-nav__item">WORK</div>
        <div className="header-nav__item">PROJECTS</div>
      </nav>
      <div className="header-hamburger" onClick={toggleNav}>
        {visible ? '×' : '≡'}
      </div>
    </>
  );
};
