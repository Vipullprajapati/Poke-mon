import { shuffle } from "fast-shuffle";
import Fuse from "fuse.js";

import data from "./data.json";
import PokemonCard from "./components/ PokemonCard";

const inputEl = document.querySelector("#floatingInputGroup1");
const pokemonRow = document.querySelector("[pokemon-row]");

// ===render
function renderPokemon(list) {
  pokemonRow.innerHTML = "";

  // `using fragment`
  const fragment = document.createDocumentFragment();

  list.forEach((PokemonObj) => {
    const { name, image, description, link } = PokemonObj;
    const pokemon = PokemonCard(name, image, description, link);
    fragment.appendChild(pokemon);
  });
  pokemonRow.appendChild(fragment);
}

// filtering
function renderFilterPokemons(input) {
  if (input === "") {
    return renderPokemon(data);
  }

  const fuse = new Fuse(data, {
    keys: ["name", "abilities"],
    threshold: 0.5,
  });

  const filterPokemons = fuse.search(input).map((object) => object.item);

  if (filterPokemons.length === 0) {
    renderPokemon([
      {
        name: "not found",
        image:
          "https://e7.pngegg.com/pngimages/10/205/png-clipart-computer-icons-error-information-error-angle-triangle-thumbnail.png",
        description: "Bhai kuch our type kar",
        link: "",
      },
    ]);
    return;
  }

  renderPokemon(filterPokemons);
}

// ==== add listener
let debounceTime;
inputEl.addEventListener("input", (e) => {
  clearTimeout(debounceTime);
  debounceTime = setTimeout(() => {
    const currInput = e.target.value.toLowerCase().trim();
    renderFilterPokemons(currInput);
  }, 300);
});

//  ======add "/" key word =====
document.addEventListener("keyup", (input) => {
  if (input.key === "/") {
    inputEl.focus();
  }
});

// ===shuffle data
renderPokemon(shuffle(data));
