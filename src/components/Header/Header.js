import './Header.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';


export default function Header({ aboutMeRef, jobExperienceRef, projectsRef }) {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav aboutMeRef={aboutMeRef} jobExperienceRef={jobExperienceRef} projectsRef={projectsRef} />
    </header>
  );
};
