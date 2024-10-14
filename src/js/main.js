import data from "./data.json";

const inputEl = document.querySelector("#floatingInputGroup1");
// console.log(inputEl);

const pokemonRow = document.querySelector("[pokemon-row]");
// console.log(remoteEl);
// inputEl.focus();

// itreted
for (let object of data) {
  const { name, image, description } = object;
  // console.log(name);
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

function pokemon() {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<div class="card">
    <img
      src="https://placeholder.co/200"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>`;

  return div;
}
