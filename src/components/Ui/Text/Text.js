import './Text.css';

export default function Text({ text }) {
  return <div className="text" dangerouslySetInnerHTML={{__html: text}} />;
}
