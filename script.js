// does not work when variables are declared outside the function, need to be loaded onclick not page load

const button = document.querySelector("button");

button.onclick = function calculate() {
  const length = document.querySelector("#length").value;
  const width = document.querySelector("#width").value;
  const height = document.querySelector("#height").value * 0.08333;
  const volume = document.querySelector("#volume");

  const bagNumberSmall = document.querySelector(".bagNumberSmall");
  const bagNumberLarge = document.querySelector(".bagNumberLarge");
  const yards = document.querySelector(".yards");

  const volumeCubed = length * width * height;
  volume.innerHTML = Math.round(volumeCubed) + " cubic feet."; 
  yards.innerHTML = Math.ceil(volumeCubed / 27) + " cubic yards";
  bagNumberSmall.innerHTML = Math.ceil(volumeCubed / 0.45) + " bags";
  bagNumberLarge.innerHTML = Math.ceil(volumeCubed / 0.6) + " bags";
};

