import './Card.css';

export default function Card({ item }) {
  return (
    <div className={`card card_color-${item.color}`}>
      <div className="card__label">{item.label.toUpperCase()}</div>
      <div className="card__title">{item.title.toUpperCase()}</div>
    </div>
  );
}
