import './AboutMe.css';
import Heading from '../Ui/Heading/Heading';
import Text from '../Ui/Text/Text';
import Contacts from '../Contacts/Contacts';
import { content } from './content';

export default function AboutMe() {
  return (
    <div className="about-me">
      <Heading title="About me" />
      <div className="about-me__content">
        <Text text={content.text} />
        <Contacts direction={ window.innerWidth > 768 ? 'column' : 'row' } />
      </div>
    </div>
  );
}