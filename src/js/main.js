import data from "./data.json";
import PokemonCard from "./components/ PokemonCard";

const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);

const pokemonRow = document.querySelector("[pokemon-row]");
// console.log(remoteEl);
// inputEl.focus();

// ===render
function renderPokemon(list) {
  pokemonRow.innerHTML = "";
  for (let object of list) {
    const { name, image, description, link } = object;
    const pokemon = PokemonCard(name, image, description, link);
    pokemonRow.appendChild(pokemon);
  }
}
renderPokemon(data);

// itreted
// for (let object of data) {
//   const { name, image, description, link } = object;
//   console.log(name, image, description, link);
//   const paragraph = document.createElement("p");
//   paragraph.textContent = name;
//   pokemonRow.appendChild(PokemonCard(name, image, description, link));
// }

// filter functionality
inputEl.addEventListener("input", (e) => {
  // console.log(e.target.value);
  const currInput = e.target.value.toLowerCase().trim();
  console.log(currInput, data);

  const filterPokemon = data.filter((object) =>
    object.name.toLocaleLowerCase().includes(currInput)
  );
  renderPokemon(filterPokemon);
});

//  ======add "/" key word =====
document.addEventListener("keyup", (input) => {
  if (input.key === "/") {
    // console.log("hey");
    inputEl.focus();
  }
  //   console.log(input.key);
});
