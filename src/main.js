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

  const circleRadius = 200;
  const circleStartAngle = 0;
  const circleEndAngle = Math.PI * 2;
  const circleCounterClockwise = false;

  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc( circleX, circleY, circleRadius, circleStartAngle, circleEndAngle, circleCounterClockwise );
  ctx.stroke();


  ctx.fillStyle = "red";
  const angle = ts * 2;

  const moveX = circleX + circleRadius * Math.cos(angle);
  const moveY = circleY + circleRadius * Math.sin(angle);

  ctx.beginPath();
  ctx.arc( moveX, moveY, 20, circleStartAngle, circleEndAngle, circleCounterClockwise );
  ctx.fill();

  requestAnimationFrame(frame);
}; frame()