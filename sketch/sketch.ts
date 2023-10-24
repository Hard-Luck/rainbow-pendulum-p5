const WIDTH = 600;
const HEIGHT = 300;
const lines = 30;
const ballSize = 10;
const balls: Ball[] = [];
let speed = 2;
const drawBalls = () => {
  balls.forEach((b) => b.draw());
};
const updateBalls = () => {
  balls.forEach((b) => b.updatePosition());
};

function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < lines; ++i) {
    balls.push(new Ball(((WIDTH / lines) * i) / 2 - WIDTH / 2, 0));
  }
  drawBalls();
}

function draw() {
  background(220);
  translate(WIDTH / 2, HEIGHT);
  noFill();
  for (let i = 1; i <= lines; ++i) {
    circle(0, 0, (WIDTH / lines) * i);
  }
  for (let j = 0; j < speed; j++) {
    updateBalls();
  }
  drawBalls();
}
