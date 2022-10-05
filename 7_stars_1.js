"use strict";

const screen = document.querySelector("body").getBoundingClientRect();

document.querySelectorAll(".star").forEach((star) => {
  const endX = (Math.random() - 0.5) * screen.width * 2;
  const endY = (Math.random() - 0.5) * screen.height * 2;
  const randomDuration = Math.floor(Math.random() * 2500) + 1000;
  const startOpacity = Math.random();
  const endOpacity = Math.random();
  console.log(endOpacity);

  // create keyframes to animate (translate) each star to a random end X and Y
  const keyframes = [{ transform: `translate(${endX}px,${endY}px)` }];
  const keyframes2 = [{ opacity: `${startOpacity}` }, { opacity: `${endOpacity}` }];

  // Also make the duration random - and why not also animate opacity and scale (to and from random values)
  const properties = {
    duration: randomDuration,
    iterations: Infinity,
  };

  const animation = star.animate(keyframes, properties);
  const animation2 = star.animate(keyframes2, properties);
});
