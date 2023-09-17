import React, { useEffect } from 'react';
import "./card.styles.css";

const Card = (props) => {
  const { name, id, height, weight, sprite, type1, type2 } = props;

  const typeColors = {
    normal: "#a8a878",
    fire: "#f08030",
    water: "#6890f0",
    electric: "#f8d030",
    grass: "#78c850",
    ice: "#98d8d8",
    fighting: "#c03028",
    poison: "#a040a0",
    ground: "#e0c068",
    flying: "#a890f0",
    psychic: "#f85888",
    bug: "#a8b820",
    rock: "#b8a038",
    ghost: "#705898",
    dark: "#705848",
    steel: "#b8b8d0",
    fairy: "#ee99ac",
  };
  
  const getTypeClass = (type) => `type-${type.toLowerCase()}`;
  
  const setBorderColor = () => {
    const card = document.getElementById(`card-${id}`);
    if (card) {
      const borderColor = typeColors[type1.toLowerCase()] || "grey";
      card.style.borderColor = borderColor;
      card.style.boxShadow = `0px 0px 15px ${borderColor}`;
    }
  };
  
  useEffect( () => {
    setBorderColor();
  }, [type1, id]);

  return (
    <div className={`card-container ${getTypeClass(type1)}`} id={`card-${id}`} key={id}>
    <div className="img-wrapper">
      <img className="sprite" src={sprite} alt={name} />
    </div>
    <h2 className="poke-name">
      #{id} {name}
    </h2>
    <h4 className="height-weight">
      {height} ft | {weight} lbs
    </h4>
    <h3 className="types">
      <span className={`type1 ${getTypeClass(type1)}`}>{type1}</span>
      {type2 ? (    
        <span className={`type2 ${getTypeClass(type2)}`}>{type2}</span> ) : null}
    </h3>
    </div>
    );
  };
  
export default Card;
