import { useState } from 'react';
import './HeaderNav.css';

export default function HeaderNav({ aboutMeRef, jobExperienceRef, projectsRef }) {
  const [visible, setVisible] = useState(false);

  const toggleNav = () => {
    setVisible((old) => !old);
  };

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className={`header-nav ${visible ? 'header-nav_opened' : ''}`}>
        <div className="header-nav__item" onClick={() => scrollToRef(aboutMeRef)}>ABOUT ME</div>
        <div className="header-nav__item" onClick={() => scrollToRef(jobExperienceRef)}>WORK</div>
        {/* <div className="header-nav__item" onClick={() => scrollToRef(projectsRef)}>PROJECTS</div> */}
      </nav>
      <div className="header-hamburger" onClick={toggleNav}>
        {visible ? '×' : '≡'}
      </div>
    </>
  );
};
