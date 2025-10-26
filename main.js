const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const runButton = document.getElementById("runButton");
const addBall = document.getElementById("addBall");
const ballRadius = 10;



let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;

let dx = 2;
let dy = -2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x+= dx;
    y+= dy;

    if (y + dy < (ballRadius / 2) || y + dy > canvas.height - (ballRadius / 2)) {
        dy = -dy;
    }

    if (x + dx > canvas.width - (ballRadius / 2) || x + dx < (ballRadius / 2)) {
        dx = -dx;
    }
}

function drawBall () {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath;  
}

function startGame () {
    setInterval(draw, 10);
}

runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});


