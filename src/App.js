// /* 
// TODO: Add a loading screen for while it is loading the next API get
// TODO: Do better DRY so that the component did mount is not repeated down below
// TODO: Change to a functional component, use useEffect and make the api call a function before the return happens.
// TODO: Change the fetch to be a async fetch so that it fetches things faster
// TODO:  Need to add to the state the new pokemon that are being loaded with fetchAPI(). Currently it is overwriting the previous state
// */

import { useEffect, useState } from "react";
import "./App.css";
// import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import Pokedex_logo from "./images/Pokedex_logo.png";
import { Details } from "@mui/icons-material";
const App = () => {
  const [pokemonArray, setPokemonArray] = useState([])
  const [detailUrl, setDetailUrl] = useState([])
  const [pokeDetails, setPokeDetails] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState ('')
  const [scroll, setScroll] = useState (false)
const url = "https://pokeapi.co/api/v2/pokemon?limit=100"

  useEffect( () => {
    
  getPokemons(url)
  // fetchAPI(url)
  //   console.log('useEffect url', url)
  
}, []);



async function getPokemons(url){
  // console.log('inside getPokemons function')
  // console.log('inside getPokemons function url', url)
  const response = await fetch(url);
  const data = await response.json();
  setPokemonArray(data.results);
  setNextUrl(data.next)
  setPrevUrl(data.prev)
  data.results.map(async name => {
  setDetailUrl(prevDetailUrl => [...prevDetailUrl, name.url])
})
  return data
}
// const pokemonDAO = new Promise ((resolve, reject) => {
//   const poke2 = await getPokemons(url)
//   resolve(getPokemons(url))
// })
// console.log(getPokemons())
// pokemonDAO.then(getDetailsHandler())


  // console.log('detailURL', detailUrl)
  // getDetailsHandler()
  
//   function getDetailsHandler(){detailUrl.map(async name => {
//     console.log('getDetailsHandler name', name)
//     // getDetails(name)
//     const pokemons = getDetails(name);
//     console.log('pokemons', pokemons)
//     // for (const pokemon of pokemons) {
//       pokemons.data = await fetch(name).then((res) => res.json());
//     // }
//     setPokeDetails(
// { pokemon: pokemons });
     
// })};
// console.log(detailUrl)



const handleNext = () => {
  getPokemons(nextUrl)
}
const handlePrevious = () => {
  getPokemons(prevUrl)
}
  return(
    // <div>placeholder</div>
    <div>
    <div className="App">
    <img src={Pokedex_logo} alt="pokedex-logo" className="pokedex-logo" />
    <div className="search-container"> </div>
    <CardList pokemon={pokemonArray}/>
  </div>
  <button onClick={handlePrevious}>PREVIOUS</button>
  <button onClick={handleNext}>NEXT</button>
    </div>
  )
}

export default App

// import React from "react";
// import {
//   Grid,
//   CircularProgress,
//   GridList,
//   GridListTile,
//   GridListTileBar
// } from "@material-ui/core";
// // import { Alert } from "@material-ui/lab";
// import { useQuery } from "react-query";

// const getPokemons = async () => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
//   const data = await response.json();

//   return data;
// };

// const getPokemon = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// };

// const PokemonTile = ({ name, url }) => {
//   const { error, isLoading, data } = useQuery(`pokemon${name}`, () =>
//     getPokemon(url)
//   );

//   // if (error) {
//   //   return <Alert severity="error">{error}</Alert>;
//   // }

//   if (isLoading) {
//     return (
//       <Grid container justify="center">
//         <CircularProgress />
//       </Grid>
//     );
//   }

//   const {
//     sprites: { front_default }
//   } = data;

//   return (
//     <GridListTile>
//       <img src={front_default} alt={name} />
//       <GridListTileBar title={name} />
//     </GridListTile>
//   );
// };

// export const App = () => {
//   const { error, isLoading, data } = useQuery("pokemons", getPokemons);

//   if (error) {
//     return <Alert severity="error">{error}</Alert>;
//   }

//   if (isLoading) {
//     return (
//       <Grid container justify="center">
//         <CircularProgress />
//       </Grid>
//     );
//   }

//   const { results: pokemons } = data;

//   return (
//     <GridList cellHeight={300}>
//       {pokemons.map((pokemon) => (
//         <PokemonTile key={pokemon.name} {...pokemon} />
//       ))}
//     </GridList>
//   );
// };




// // class App extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       pokemon: [],
// //       nextUrl: "",
// //       prevUrl: "",
// //     };
// //   }

//   // componentDidMount() {
//   //   const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=27";
//   //   try {
//   //     fetch(baseUrl)
//   //       .then((response) => {
//   //         const responseJson = response.json();

//   //         return responseJson;
//   //       })
//   //       .then(async (data) => {
//   //         this.setState({ nextUrl: data.next });
//   //         this.setState({ prevUrl: data.prev });

//           // const pokemons = data.results;
//           // for (const pokemon of pokemons) {
//           //   pokemon.data = await fetch(pokemon.url).then((res) => res.json());
//           // }
//           // this.setState(
//           //   () => {
//           //     return { pokemon: pokemons };
//           //   },
//           //   () => {}
//           // );
//   //         window.onscroll = () => {
//   //           if (
//   //             window.innerHeight + document.documentElement.scrollTop ===
//   //             document.documentElement.offsetHeight
//   //           ) {
//   //             this.fetchAPI(this.state.nextUrl);
//   //           }
//   //         };
//   //       })
//   //       .catch((error) => {
//   //         console.error(error);
//   //       });
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }

// //   render() {
// //     return (
//       // <div className="App">
//       //   <img src={Pokedex_logo} alt="pokedex-logo" className="pokedex-logo" />
//       //   <div className="search-container"> </div>
//       //   <CardList pokemon={this.state.pokemon} />
//       // </div>
// //     );
// //   }

// //   fetchAPI(url) {
// //     const baseUrl = url;
// //     try {
// //       fetch(baseUrl)
// //         .then((response) => {
// //           const responseJson = response.json();

// //           return responseJson;
// //         })
// //         .then(async (data) => {
// //           this.setState({ nextUrl: data.next });
// //           this.setState({ prevUrl: data.prev });

// //           const pokemons = data.results;
// //           for (const pokemon of pokemons) {
// //             pokemon.data = await fetch(pokemon.url).then((res) => res.json());
// //           }

// //           this.setState({
// //             pokemon: this.state.pokemon.concat(pokemons),
// //           });
// //         })
// //         .catch((error) => {
// //           console.error(error);
// //         });
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }
// // }

// // export default App;


