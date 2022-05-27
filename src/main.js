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

const frame = (ts) => {
  ts /= 1000;

  ctx.clearRect(0, 0, sizes.WIDTH, sizes.HEIGHT);

  const circleX = sizes.WIDTH / 2;
  const circleY = sizes.HEIGHT / 2;
  // heart beat animation
  const circleRadius = 100 + Math.cos(Math.abs(ts)*5)*2;
  const circleStartAngle = 0;
  const circleEndAngle = Math.PI * 2;
  const circleCounterClockwise = false;

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc( circleX, circleY, circleRadius, circleStartAngle, circleEndAngle, circleCounterClockwise );
  ctx.fill();

  requestAnimationFrame(frame);
}; frame()