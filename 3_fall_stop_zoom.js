"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom
const properties = {
  duration: 2500,
  iterations: Infinity,
};

const properties2 = {
  duration: 500,
  iterations: 1,
  fill: "forwards",
  composite: "add",
};

const keyframes1 = [{ transform: "translateY(-20vw)" }, { transform: "translateY(65vw" }];
const keyframes2 = [{ transform: "scale(1)" }, { transform: "scale(0)" }];

// register click
ball.addEventListener("mousedown", ballClicked);

// start falling animation
const falling = ball.animate(keyframes1, properties);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  falling.pause();

  // start zoom-animation
  const zoom = ball.animate(keyframes2, properties2);

  zoom.onfinish = (event) => {
    zoom.cancel();
    falling.play();
    falling.updatePlaybackRate(0.5);
  };
}
