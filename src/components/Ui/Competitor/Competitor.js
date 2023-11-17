import './Competitor.css';

export default function Competitor({ data }) {
  const items = data.items.map((item) => {
    return <div key={item.id} className="competitor__item">{item.text}</div>
  })
  return (
    <div className="competitor">
      <div className="competitor__head">
        <div className="competitor__icon" />
        <div className="competitor-heading">
          <div className="competitor-heading__title">
            {data.title}
          </div>
          <div className="competitor-heading__subtitle">
            {data.subtitle}
          </div>
        </div>
      </div>
      <div className="competitor__body">
        {items}
      </div>
    </div>
  );
};
