import "./main.css";

const canvas = document.querySelector("[data-canvas]");
const ctx = canvas.getContext("2d");

const sizes = {
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
}

// determine mouse position
const mousePosition = {
  x: 0,
  y: 0,
}
canvas.addEventListener("mousemove", (event) => {
  const mouseX = event.layerX;
  const mouseY = event.layerY;
  mousePosition.x = mouseX;
  mousePosition.y = mouseY;
})

canvas.width = sizes.WIDTH * devicePixelRatio;
canvas.height = sizes.HEIGHT * devicePixelRatio;
canvas.style.width = `${sizes.WIDTH}px`;
canvas.style.height = `${sizes.HEIGHT}px`;

const frame = (ts) => {
  ts /= 1000;

  ctx.clearRect(0, 0, sizes.WIDTH, sizes.HEIGHT);

  const centerX = sizes.WIDTH / 2;
  const centerY = sizes.HEIGHT / 2;
  const arrowWidth = 100;
  
  ctx.fillStyle = "red";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;

  const dx = mousePosition.x - centerX;
  const dy = mousePosition.y - centerY;
  const angle = Math.atan2(dy, dx);

  ctx.save();
    ctx.translate(centerX, centerY);

    // control animation with mouse
    ctx.rotate(angle);
    // // linear animation
    // ctx.rotate(ts);  

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -10);
    ctx.lineTo(0 + arrowWidth / 2, -10);
    ctx.lineTo(0 + arrowWidth / 2, -20);
    ctx.lineTo(0 + arrowWidth, 0);
    ctx.lineTo(0 + arrowWidth / 2, 20);
    ctx.lineTo(0 + arrowWidth / 2, 10);
    ctx.lineTo(0, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  ctx.restore();

  requestAnimationFrame(frame);
}; frame()