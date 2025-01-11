import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import JobExperience from './components/JobExperience/JobExperience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Content from './components/Ui/Content/Content';
import './App.css';
import { useRef } from 'react';

function App() {
  const aboutMeRef = useRef(null);
  const jobExperienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="app">
      <Header aboutMeRef={aboutMeRef} jobExperienceRef={jobExperienceRef} projectsRef={projectsRef} />
      <Hero />
      <Content>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div ref={jobExperienceRef}>
          <JobExperience />
        </div>
        {/* <div ref={projectsRef}>
          <Projects />
        </div> */}
      </Content>
      <Footer />
    </div>
  );
}

export default App;
