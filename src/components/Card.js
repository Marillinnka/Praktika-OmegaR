export function Card(props) {
  return (
    <div className="block-cards__card">
      <img className="block-cards__card-image" src={props.src} />
      <p className="block-cards__card-text">{props.text}</p>
    </div>
  );
}
