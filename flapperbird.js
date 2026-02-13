let bird = document.getElementById("bird");
let birdy = 200;
let gravity = 0.5;    // weaker gravity
let velocity = 0;      // start with no movement
let jumpPower = -8;    // how strong each click is
let maxFallSpeed = 10; // cap falling speed

function jump() {
    velocity = jumpPower; // every click boosts bird up
}

document.addEventListener("click", jump);

function gameLoop() {
    // Apply gravity
    velocity += gravity;
    if (velocity > maxFallSpeed) velocity = maxFallSpeed; // limit falling speed

    birdy += velocity;

    // Keep bird inside window
    if (birdy > window.innerHeight - 120) birdy = window.innerHeight - 120;
    if (birdy < 0) birdy = 0;

    bird.style.top = birdy + "px";

    requestAnimationFrame(gameLoop);
}

gameLoop();

