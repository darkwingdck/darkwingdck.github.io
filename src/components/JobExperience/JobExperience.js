import './JobExperience.css';
import Heading from '../Ui/Heading/Heading';
import { content } from './content';
import Card from '../Ui/Card/Card';
import Text from '../Ui/Text/Text';

export default function JobExperience() {
  const jobsList = content.jobs.map((job) => {
    return (
      <div key={job.id} className="job">
        <Card item={job} />
        <Text text={job.description} />
      </div>
    );
  });
  return (
    <div className="job-experience">
      <Heading title='Job experience' />
      {jobsList}
    </div>
  );
}
