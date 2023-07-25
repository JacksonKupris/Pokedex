import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const { pokemon } = props;
  return (
    <div className="card-list">
      {pokemon.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            weight={Math.round((pokemon.weight / 10) * 2.2)}
            height={Math.round((pokemon.height / 10) * 3.28084)}
            sprite={pokemon.sprites.front_default}
            type1={pokemon.types[0].type.name}
            type2={pokemon.types[1] ? pokemon.types[1].type.name : null }
          />
        );
      })}
    </div>
  );
};

export default CardList;
