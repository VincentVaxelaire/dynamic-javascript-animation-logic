import "./main.css";

const sizes = {
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
}

const canvas = document.querySelector("[data-canvas]");
canvas.width = sizes.WIDTH * devicePixelRatio;
canvas.height = sizes.HEIGHT * devicePixelRatio;
canvas.style.width = `${sizes.WIDTH}px`;
canvas.style.height = `${sizes.HEIGHT}px`;
const ctx = canvas.getContext("2d");

let angle1 = 0;
let angle2 = 0;

const frame = (ts) => {
  ts /= 1000;

  ctx.clearRect(0, 0, sizes.WIDTH, sizes.HEIGHT);

  const circleX = sizes.WIDTH / 2;
  const circleY = sizes.HEIGHT / 2;
  const circleRadius = 100;

  ctx.fillStyle = "black";
  ctx.beginPath();
  // create wave movement
  ctx.arc(circleX + Math.sin(angle1) * 1000, circleY + Math.cos(angle2) * 50, circleRadius, 0, Math.PI * 2);
  ctx.fill();

  angle1 += 0.01;
  angle2 += 0.04;

  requestAnimationFrame(frame);
}; frame()