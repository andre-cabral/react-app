import './style.scss';

function Card({title, text}) {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__text">{text}</p>
    </div>
  );
}

export default Card;
