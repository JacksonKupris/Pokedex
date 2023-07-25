// TODO: When you click on a card, bring up more details about the pokemon
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import Pokedex_logo from "./images/Pokedex_logo.png";

const App = () => {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=27";

  useEffect(() => {
    const urlCheck = nextUrl && nextUrl.length ? nextUrl : url;

    getPokemons(urlCheck);
  }, [loading]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoading(true);
    }
  };

  const sort = async (arr) => {
    try {
      let i, j, temp;

      for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            temp = await arr[i];
            arr[i] = await arr[j];
            arr[j] = await temp;
          }
        }
      }

      // Returns the sorted array
      return arr;
    } catch (e) {
      console.error(e);
    }
  };

  async function getPokemons(url) {
    const baseUrl = url;
    try {
      fetch(baseUrl)
        .then((response) => {
          const responseJson = response.json();

          return responseJson;
        })
        .then(async (data) => {
          setNextUrl(data.next);
          const pokemons = data.results;
          const sortedPokemon = await sort(pokemons);
          setPokemonArray(sortedPokemon);
        })
        .then(() => {
          pokemonArray.map((el) => getDetails(el));
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function getDetails(pokemon) {
    pokemon.data = await fetch(pokemon.url).then((res) => res.json());
    setPokeDetails((prevState) => [...prevState, pokemon.data]);
  }

  return (
    <div>
      <div className="App">
        <img src={Pokedex_logo} alt="pokedex-logo" className="pokedex-logo" />
        <div className="search-container"> </div>
        <CardList pokemon={pokeDetails} />
      </div>
    </div>
  );
};

export default App;
