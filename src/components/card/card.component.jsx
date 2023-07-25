import "./card.styles.css";

const Card = (props) => {
  const { name, id, height, weight, sprite, type1, type2 } = props;
  return (
    <div className="card-container" key={id}>
      <div className="img-wrapper">
        <img className="sprite" src={sprite} alt={name} />
      </div>
      <h2 className="poke-name">
        #{id} {name}
      </h2>
      <h4 className="height-weight">
        {height} ft | {weight} lbs
      </h4>
      <h3 className="types">{type1}  {type2 ? `| ${type2}` : null }</h3>
    </div>
  );
};

export default Card;
