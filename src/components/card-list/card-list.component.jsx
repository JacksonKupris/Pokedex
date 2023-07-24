/**
 * TODO: Once pokemon are passed as a prop, get the details for each url, and set the state and then apply it to the below cardList. Possibly pass it down to each individual card, so that each one is responsible
 * for gathering it's own information
 */

import React, { Component } from "react";
import { useEffect, useState } from "react";

import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const [pokeDetails, setPokeDetails] = ([])
  const { pokemon} = props;
  console.log('pokemon', pokemon)
  // console.log('props', props)
  // console.log('pokemon', pokemon)
  // console.log('pokemonDetails', pokemonDetails)
  async function getDetails(url){
    const pokeArr = []
    let response = await fetch(url);
    const data = await response.json();
    // console.log('data', data)
    // console.log('data', data)
    const updateDetails = ({
      abilities: data.abilities,
      base_experience: data.base_experience,
      forms: data.forms,
      game_indices: data.game_indices,
      height:data.height,
      held_items:data.held_items,
      id:data.id,
      is_default: data.is_default,
      location_area_encounters: data.location_area_encounters,
      moves: data.moves,
      name:data.name,
      order:data.order,
      past_types:data.past_types,
      species: data.species,
      sprites:data.sprites,
      stats: data.stats,
      types:data.types,
      weight: data.weight
    })
    pokeArr.push(updateDetails)

    // console.log(updateDetails)

    // setPokeDetails(prevDetails => [...pokeDetails, updateDetails])
    // return pokeArr; 
  }

  // getDetailsHandler()
  // console.log(getDetails())
  
  
  // window.onscroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //     ) {
  //       console.log(pokemonArray)
  //       setScroll(true)
  //     }
  //   };
  
  // detailUrl.forEach(el => getDetails(el))
  // console.log(pokeDetails)


  return(
    <div className="card-list">
    {pokemon.map((pokemon) => {
      return (
        <Card
          name={pokemon.name}
          // id={pokemon.data.id}
          // weight={Math.round((pokemon.data.weight / 10) * 2.2)}
          // height={Math.round((pokemon.data.height / 10) * 3.28084)}
          // sprite={pokemon.data.sprites.front_default}
          // type1={pokemon.data.types[0].type.name}
        />
      );
    })}
  </div>
  )
}

// class CardList extends Component {
//   render() {
//     const { pokemon } = this.props;
//     return (
      // <div className="card-list">
      //   {pokemon.map((pokemon) => {
      //     return (
      //       <Card
      //         name={pokemon.name}
      //         id={pokemon.data.id}
      //         weight={Math.round((pokemon.data.weight / 10) * 2.2)}
      //         height={Math.round((pokemon.data.height / 10) * 3.28084)}
      //         sprite={pokemon.data.sprites.front_default}
      //         type1={pokemon.data.types[0].type.name}
      //       />
      //     );
      //   })}
      // </div>
//     );
//   }
// }

export default CardList;
// type2 ={pokemon.data.types[1].type.name}
