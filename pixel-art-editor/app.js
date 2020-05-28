document.addEventListener("DOMContentLoaded", () => {});

const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const colorPalette = document.querySelector(".color-palette");
const popup = document.querySelector("#popup");
var numOfDivs = 0;

var selectedColor = "red";

// create a grid based on the option the user clicks and close the popup
function createGrid(size) {
  // Remove previously created grid
  document.querySelector("#grid").parentNode.removeChild(document.querySelector('#grid'));

  // Create a new grid
  let grid = document.createElement("DIV");
  grid.classList.add("grid");
  grid.setAttribute("id", 'grid');

  if (size === "small") {
    numOfDivs = 320;
    // create grid container
    grid.classList.add("grid-small");
    document.body.querySelector(".container").appendChild(grid);
    // create n divs in grid container
    for (i = 1; i <= numOfDivs; i++) {
      let div = document.createElement("DIV");
      div.setAttribute("id", i);
      div.setAttribute("onClick", "returnId(this.id)");
      //div.innerHTML = i;
      document.body.querySelector(".grid").appendChild(div);
    }
  } else if (size === "medium") {
    numOfDivs = 600;
    grid.classList.add("grid-medium");
    document.body.querySelector(".container").appendChild(grid);
    // create n divs in grid container
    for (i = 1; i <= numOfDivs; i++) {
      let div = document.createElement("DIV");
      div.setAttribute("id", i);
      div.setAttribute("onClick", "returnId(this.id)");
      //div.innerHTML = i;
      document.body.querySelector(".grid").appendChild(div);
    }
  } else if (size === "big") {
    numOfDivs = 960;
    grid.classList.add("grid-big");
    document.body.querySelector(".container").appendChild(grid);
    // create n divs in grid container
    for (i = 1; i <= numOfDivs; i++) {
      let div = document.createElement("DIV");
      div.setAttribute("id", i);
      div.setAttribute("onClick", "returnId(this.id)");
      //div.innerHTML = i;
      document.body.querySelector(".grid").appendChild(div);
    }
  }

  document.querySelector("#popup").classList.add("closed");
};

// set background of clicked div to selectedColor
function returnId(id) {
  document.getElementById(id).removeAttribute("class");
  document.getElementById(id).classList.add(selectedColor);
};

// return the id from the clicked on color in the color selector and assign it to selectedColor
function setSelectedColor(id) {
  document.querySelector('#selected-color').removeAttribute("class");
  selectedColor = id;
  document.querySelector('#selected-color').classList.add(id);
};

// when click on this button restore all pixels to white
function reset() {
  for (let i = 1; i <= numOfDivs; i++) {
    document.getElementById(i).removeAttribute("class");
  }
};

// make the popup visible
function newArtboard() {
  document.querySelector('#popup').classList.remove('closed');
};