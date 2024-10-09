import data from "./data.json";

const inputEl = document.querySelector("#floatingInputGroup1");
console.log(inputEl);

// inputEl.focus();

// for (let object of data) {
//   console.log(object.name);
// }

document.addEventListener("keyup", (input) => {
  if (input.key === "/") {
    // console.log("hey");
    inputEl.focus();
  }
  //   console.log(input.key);
});
