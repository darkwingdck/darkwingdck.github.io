import './IconLink.css';

export default function IconLink({ iconName, link }) {
  return (
    <a href={link} className="icon-link" target="_blank" rel="noreferrer">
      <div className={`icon-link__icon icon-link__icon_${iconName}`} />
    </a>
  );
}