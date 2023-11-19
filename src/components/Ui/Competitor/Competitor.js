import './Competitor.css';

export default function Competitor({ data }) {
  const items = data.items.map((item) => {
    return (
      <div key={item.id} className="competitor-item">
        <div className="competitor-item__dot">•</div>
        <div className="competitor-item__text" dangerouslySetInnerHTML={{__html: item.text}} />
      </div>
    );
  })
  return (
    <div className="competitor">
      <div className="competitor__head">
        <div className="competitor__icon" />
        <div className="competitor__title">
          {data.title}
        </div>
      </div>
      <div className="competitor__body">
        {items}
      </div>
    </div>
  );
};
