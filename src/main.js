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

  // rectangle with gradiant
  const gradiant = ctx.createLinearGradient(100, 100, 150, 100);
  gradiant.addColorStop(0, "red");
  gradiant.addColorStop(1, "green");

  ctx.fillStyle = gradiant
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;

  ctx.fillRect(100, 100, 50, 50);
  ctx.strokeRect(100, 100, 50, 50);


  // circle
  const circleX = 100;
  const circleY = 250;
  const circleRadius = 50;
  const startAngle = 0;
  const endAngle = Math.PI * 2;

  ctx.fillStyle = "orange";

  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();

  
  // line
  ctx.lineWidth = 1;
  ctx.strokeStyle = "brown";

  ctx.beginPath();
  ctx.moveTo(125, 350);
  ctx.lineTo(175, 350);
  ctx.lineTo(175, 330);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();


  // bezier quadratic curve
  ctx.lineWidth = 2;
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(125, 450);
  ctx.quadraticCurveTo(150, 400, 175, 450);
  ctx.stroke();


  // bezier cubic curve
  ctx.lineWidth = 1;
  ctx.strokeStyle = "green";
  ctx.beginPath();

  const startX = 250;
  const startY = 450;

  const cp1x = startX + 50;
  const cp1y = startY - 50 + ts * 40;
  const cp2x = startX + 100;
  const cp2y = startY - 50;
  const endX = startX + 150;
  const endY = startY;

  ctx.moveTo(startX, startY);
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
  ctx.stroke();


  // text
  ctx.fillStyle = "yellowgreen";
  ctx.font = "2rem Arial";
  ctx.fillText("Hello World", 250, 100);

  // stroke text
  ctx.fillStyle = "yellowgreen";
  ctx.font = "2rem Arial";
  ctx.strokeText("Hello World", 250, 200);


  requestAnimationFrame(frame);
}; frame()