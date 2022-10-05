"use strict";

const ball = document.querySelector("#ball");
const ballSize = document.querySelector("#ball").getBoundingClientRect();
const stage = document.querySelector("#stage").getBoundingClientRect();

const centerX = stage.width / 2 - ballSize.width / 2;
const rightX = stage.width - ballSize.width;
const centerY = stage.height / 2 - ballSize.height / 2;
const bottomY = stage.height - ballSize.height;

// Create keyframes and properties
const properties = {
  duration: 2000,
  iterations: Infinity,
};

const keyframes = [
  { transform: `translate(${centerX}px,0)` },
  { transform: `translate(${rightX}px,${centerY}px)` },
  { transform: `translate(${centerX}px,${bottomY}px)` },
  { transform: `translate(0,${centerY}px)` },
  { transform: `translate(${centerX}px,0)` },
];

// start animation
const falling = ball.animate(keyframes, properties);
