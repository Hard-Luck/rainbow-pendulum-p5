const WIDTH = 600;
const HEIGHT = 300;
const ballSize = 10;
let balls = [];
const rainbowColors = [
  "#FF0000", // Red (Brighter)
  "#CC0000", // Red (Darker)
  "#FF7F00", // Orange (Brighter)
  "#CC6600", // Orange (Darker)
  "#DDDD00", // Yellow (Brighter)
  "#00FF00", // Green (Brighter)
  "#009900", // Green (Darker)
  "#0000FF", // Blue (Brighter)
  "#0000CC", // Blue (Darker)
  "#4B0082", // Indigo
  "#9400D3", // Violet (Brighter)
  "#7B009E", // Violet (Darker)
];
let lines = 50;
const sounds = [];
let ballsStarted = 0;
const drawBalls = () => {
  balls.forEach((b) => b.draw());
};
const updateBalls = () => {
  balls.forEach((b) => b.updatePosition());
};
function preload() {
  for (let i = 0; i < 12; i++) {
    sounds.push(loadSound(`sounds/${i}.wav`));
  }
}
let soundOn = false;
let soundButton;
let linesSlider;
function setup() {
  noFill();
  stroke(255);
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < lines; ++i) {
    balls.push(
      new Ball(
        ((WIDTH / lines) * i) / 2 - WIDTH / 2,
        0,
        rainbowColors[i % 12],
        sounds[i % 12]
      )
    );
  }
  drawBalls();
  soundButton = createButton("Turn Sound On");
  soundButton.position(0, HEIGHT + 20);
  soundButton.mousePressed(toggleSound);
  linesSlider = createSlider(1, 100, lines); // Min: 1, Max: 100, Default: lines
  linesSlider.position(0, HEIGHT + 50);
  linesSlider.input(onLinesChanged);
  linesDisplay = createP(`${lines} number of balls`);
  linesDisplay.position(0, HEIGHT + 70);
}
function onLinesChanged() {
  lines = linesSlider.value();

  balls = [];

  for (let i = 0; i < lines; ++i) {
    balls.push(
      new Ball(
        ((WIDTH / lines) * i) / 2 - WIDTH / 2,
        0,
        rainbowColors[i % 12],
        sounds[i % 12]
      )
    );
  }
  ballsStarted = 0;
}

function toggleSound() {
  soundOn = !soundOn;
  if (soundOn) {
    userStartAudio();
    soundButton.html("Turn Sound Off");
  } else {
    getAudioContext().suspend();
    soundButton.html("Turn Sound On");
  }
}

function draw() {
  if (ballsStarted < lines) {
    balls[ballsStarted].moving = true;
    ballsStarted++;
  }
  background(0);
  translate(WIDTH / 2, HEIGHT);
  noFill();
  for (let i = 0; i < lines; ++i) {
    stroke(rainbowColors[(lines - i - 1) % 12]);
    circle(0, 0, (WIDTH / lines) * (i + 1));
  }

  updateBalls();
  drawBalls();
}
function mousePressed() {
  userStartAudio();
}
