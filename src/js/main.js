import data from "./data.json";

const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);

const pokemonRow = document.querySelector("[pokemon-row]");
// console.log(remoteEl);
// inputEl.focus();

// itreted
for (let object of data) {
  const { name } = object;
  // console.log(name);
  const paragraph = document.createElement("p");
  paragraph.textContent = name;
  pokemonRow.appendChild(paragraph);
}

//  ======add "/" key word =====
document.addEventListener("keyup", (input) => {
  if (input.key === "/") {
    // console.log("hey");
    inputEl.focus();
  }
  //   console.log(input.key);
});
