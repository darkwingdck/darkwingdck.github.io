import './Heading.css';

export default function Heading({ title }) {
  return (
    <div className="heading">
      <div className="heading__lead" />
      <div className="heading__text">{title.toUpperCase()}</div>
    </div>
  );
}