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


  requestAnimationFrame(frame);
}; frame()