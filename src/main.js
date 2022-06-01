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

let posX = canvas.width / 2
let posY = canvas.height / 2

let oldTime = 0

const randomAngle = Math.random() * (Math.PI * 2)

const frame = (ts) => {
  ts /= 1000
  const dt = ts - oldTime
  oldTime = ts

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const speed = dt * 50

  const velocityX = Math.cos(randomAngle) * speed
  const velocityY = Math.sin(randomAngle) * speed

  posX += velocityX
  posY += velocityY

  ctx.fillRect(posX, posY, 40, 40)

  requestAnimationFrame(frame);
}; frame()