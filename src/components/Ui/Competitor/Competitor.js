import './Competitor.css';

export default function Competitor({ data }) {
  const items = data.items.map((item) => {
    return (
      <div key={item.id} className="competitor-item">
        <div className="competitor-item__dot">•</div>
        <div className="competitor-item__text" dangerouslySetInnerHTML={{__html: item.text}} />
      </div>
    );
  });

  const title = (data) => {
    if (data.hasOwnProperty("link")) {
      return (
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="competitor__title link"
        >
          {data.title}
        </a>
      )
    } else {
      return (
        <div className="competitor__title">
          { data.title }
        </div>
      )
    }
  };
  return (
    <div className="competitor">
      <div className="competitor__head">
        <div className="competitor__icon" />
        { title(data) }
      </div>
      <div className="competitor__body">
        {items}
      </div>
    </div>
  );
};
