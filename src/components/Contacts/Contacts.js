import IconLink from '../Ui/IconLink/IconLink';
import './Contacts.css';
import { content } from './content';

export default function Contacts ({ direction }) {
  const contactsList = content.contacts.map(contact => {
    return <IconLink key={contact.id} link={contact.link} iconName={contact.name}/>
  })
  return (
    <div className={`contacts contacts_direction-${direction}`}>
      {contactsList}
    </div>
  )
}
