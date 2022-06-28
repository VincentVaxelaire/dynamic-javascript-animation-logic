import "./main.css";

const canvas = document.querySelector("[data-canvas]");
const ctx = canvas.getContext("2d");

const sizes = {
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
}

canvas.width = sizes.WIDTH * devicePixelRatio;
canvas.height = sizes.HEIGHT * devicePixelRatio;
canvas.style.width = `${sizes.WIDTH}px`;
canvas.style.height = `${sizes.HEIGHT}px`;

let currentTime = 0;

let positionX = 100;
let positionY = 100;

let velocityX = 0;
let velocityY = 0;

let accelerationX = 0.05;
let accelerationY = 0.05;

const frame = (ts) => {
  ts /= 1000;
  const deltaTime = ts - currentTime;
  currentTime = ts;

  ctx.clearRect(0, 0, sizes.WIDTH, sizes.HEIGHT);

  velocityX += accelerationX * deltaTime;
  velocityY += accelerationY * deltaTime;

  positionX += velocityX;
  positionY += velocityY;

  ctx.fillRect(positionX, positionY, 20, 20);

  requestAnimationFrame(frame);
}; frame()