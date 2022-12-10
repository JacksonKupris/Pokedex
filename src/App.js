import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import Pokedex_logo from './images/Pokedex_logo.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      nextUrl: "",
      prevUrl: "",
    };

  }

  componentDidMount() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=16";
    try {
      fetch(baseUrl)
        .then((response) => {
          const responseJson = response.json();

          return responseJson;
        })
        .then(async (data) => {
          this.setState({ nextUrl: data.next });
          this.setState({ prevUrl: data.prev });

          const pokemons = data.results;
          for (const pokemon of pokemons) {
            pokemon.data = await fetch(pokemon.url).then((res) => res.json());
          }
          this.setState(
            () => {
              return { pokemon: pokemons };
            },
            () => {}
          );
          window.onscroll = () => {
            if (
              window.innerHeight + document.documentElement.scrollTop ===
              document.documentElement.offsetHeight
            ) {
              this.fetchAPI(this.state.nextUrl);
            }
          };
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
      <img src={Pokedex_logo} alt='pokedex-logo' className="pokedex-logo"/>
        <CardList pokemon={this.state.pokemon} />
      </div>
    );
  }
  fetchAPI(url) {
    const baseUrl = url;
    try {
      fetch(baseUrl)
        .then((response) => {
          const responseJson = response.json();

          return responseJson;
        })
        .then(async (data) => {
          this.setState({ nextUrl: data.next });
          this.setState({ prevUrl: data.prev });

          const pokemons = data.results;
          for (const pokemon of pokemons) {
            pokemon.data = await fetch(pokemon.url).then((res) => res.json());
          }

          this.setState({
            pokemon: this.state.pokemon.concat(pokemons)
          })
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;

// Need to add to the state the new pokemon that are being loaded
// with fetchAPI(). Currently it is overwriting the previous state
