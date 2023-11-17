import './Projects.css';
import Heading from '../Ui/Heading/Heading';
import Competitor from '../Ui/Competitor/Competitor';
import { content } from './content';

export default function Projects() {
  const projects = content.projects.map((project) => {
    return <Competitor key={project.id} data={project} />
  });
  return (
    <>
      <Heading title="Projects" />
      <div className="projects">
        {projects}
      </div>
    </>
  );
};
