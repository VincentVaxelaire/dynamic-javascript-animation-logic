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

let posX = 0
let posY = 0

let oldTime = 0

// const velocityX = Math.random() * 2 - 1;
// const velocityY = Math.random() * 2 - 1;

const frame = (ts) => {
  ts /= 1000
  const dt = ts - oldTime
  oldTime = ts

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  posX += dt * 100
  posY += dt * 50

  ctx.fillRect(posX, posY, 40, 40)

  requestAnimationFrame(frame);
}; frame()