import data from "./data.json";
import PokemonCard from "./components/ PokemonCard";

const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);

const pokemonRow = document.querySelector("[pokemon-row]");
// console.log(remoteEl);
// inputEl.focus();

// itreted
for (let object of data) {
  const { name, image, description, link } = object;
  console.log(name, image, description, link);
  const paragraph = document.createElement("p");
  paragraph.textContent = name;
  pokemonRow.appendChild(PokemonCard(name, image, description, link));
}

//  ======add "/" key word =====
document.addEventListener("keyup", (input) => {
  if (input.key === "/") {
    // console.log("hey");
    inputEl.focus();
  }
  //   console.log(input.key);
});
