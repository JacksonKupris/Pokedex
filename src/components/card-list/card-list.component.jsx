import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="card-list">
        {pokemon.map((pokemon) => {
          return (
            <Card
              name={pokemon.name}
              id={pokemon.data.id}
              weight={Math.round(pokemon.data.weight/10*2.2)}
              height={Math.round(pokemon.data.height/10*3.28084)}
              sprite={pokemon.data.sprites.front_default}
              type1={pokemon.data.types[0].type.name}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
// type2 ={pokemon.data.types[1].type.name}
