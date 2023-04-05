import React, { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, id, height, weight, sprite, type1 } = this.props;

    return (
      <div className="card-container" key={id}>
        <div className="img-wrapper">
          <img className="sprite" src={sprite} alt={name} />
        </div>
        <h2 className="poke-name">
          #{id} {name}
        </h2>
        <h4 className="height-weight">
          {height}' - {weight} lbs
        </h4>
        <h3 className="type1">{type1}</h3>
      </div>
    );
  }
}

export default Card;
