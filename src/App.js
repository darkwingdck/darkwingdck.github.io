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

  const yandexMeticsCode = ```
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(99493223, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
      });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/99493223" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
  ```

  return (
    <div className="app">
      <div dangerouslySetInnerHTML={{__html: yandexMeticsCode}}></div>
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
