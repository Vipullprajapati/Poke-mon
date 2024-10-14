import data from "./data.json";

const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);

const pokemonRow = document.querySelector("[pokemon-row]");
// console.log(remoteEl);
// inputEl.focus();

// itreted
for (let object of data) {
  const { name, image, description } = object;
  console.log(name, image, description);
  const paragraph = document.createElement("p");
  paragraph.textContent = name;
  pokemonRow.appendChild(pokemon(name, image, description));
}

//  ======add "/" key word =====
document.addEventListener("keyup", (input) => {
  if (input.key === "/") {
    // console.log("hey");
    inputEl.focus();
  }
  //   console.log(input.key);
});

function pokemon(name, image, description) {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<div class="card">
    <img
      src="${image}"
      class="card-img-top"
      alt="${name}"
    />
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>`;

  return div;
}
