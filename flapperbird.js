// flapperbird.js
let bird = document.getElementById("bird");
let birdy = 200;
let gravity = 0.4;
let velocity = 0;

function jump() {
  velocity = -10;  // bird jumps upward
}

document.addEventListener("click", jump);

function gameLoop() {
  velocity += gravity;  // gravity pulls bird down
  birdy += velocity;

  // keep bird inside screen
  if (birdy > window.innerHeight - 120) birdy = window.innerHeight - 120;
  if (birdy < 0) birdy = 0;

  bird.style.top = birdy + "px";  // move bird

  requestAnimationFrame(gameLoop);
}

// pipe references (just for now)
let pipeAboveTall = document.getElementById("pipe-tall-up");
let pipeBelowTall = document.getElementById("pipe-tall-down");
let pipeBelow = document.getElementById("pipe-down");
let pipeUp = document.getElementById("pipe-up");

gameLoop();




