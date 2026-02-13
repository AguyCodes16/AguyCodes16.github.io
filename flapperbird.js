let bird = document.getElementById("bird");
let birdy = 200;
let gravity = 0.8;
let velocity = 0.3;

function jump() {
  velocity = -10; // click to move up
}

document.addEventListener("click", jump);

function gameLoop() {
  velocity += gravity;
  birdy += velocity;

  if (birdy > window.innerHeight - 120) birdy = window.innerHeight - 120;
  if (birdy < 0) birdy = 0;

  bird.style.top = birdy + "px";

  requestAnimationFrame(gameLoop);
}

gameLoop();
