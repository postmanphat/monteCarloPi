// document.addEventListener("DOMContentLoaded", main, false);

let canvas = document.getElementById("html-canvas");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
let context = canvas.getContext("2d");
let totalPoints = 0;
let insidePoints = 0;

requestAnimationFrame(generatePoint);

function distanceFromOrigin(x, y) {
  let dX = x;
  let dY = y - canvas.height;
  return Math.sqrt(dX * dX + dY * dY);
}

function generatePoint() {
  totalPoints++;
  let xPos = Math.floor(Math.random() * canvas.width);
  let yPos = Math.floor(Math.random() * canvas.height);
  context.beginPath();
  context.fillStyle = "#FF0000";
  if (distanceFromOrigin(xPos, yPos) < canvas.width) {
    insidePoints++;
    context.fillStyle = "#0000FF";
  }
  context.arc(xPos, yPos, 1, 0, Math.PI * 2);
  context.fill();
  if (totalPoints % 1000 == 0) {
    console.log("Pi approximation: " + (insidePoints / totalPoints) * 4);
  }

  requestAnimationFrame(generatePoint);
}
