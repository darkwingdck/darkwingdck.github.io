import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import JobExperience from './components/JobExperience/JobExperience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Content from './components/Ui/Content/Content';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Content>
        <AboutMe />
        <JobExperience />
        <Projects />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
