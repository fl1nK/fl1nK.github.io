var block1 = document.getElementById("1");
var block2 = document.getElementById("2");
var block3 = document.getElementById("3");
var block4 = document.getElementById("4");
var block5 = document.getElementById("5");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const colors = [];
colors[0] = "red";
colors[1] = "yellow";
colors[2] = "green";
colors[3] = "blue";
colors[4] = "pink";
colors[5] = "red";
colors[6] = "yellow";
colors[7] = "green";
colors[8] = "blue";
colors[9] = "pink";

var i = 0;
function color() {
  block1.style.backgroundColor = colors[i];
  block2.style.backgroundColor = colors[i + 1];
  block3.style.backgroundColor = colors[i + 2];
  block4.style.backgroundColor = colors[i + 3];
  block5.style.backgroundColor = colors[i + 4];

  if (i == 2) {
    i = 0;
  } else {
    i = i + 1;
  }
}
