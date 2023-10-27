class Ball {
  constructor(startX, startY, colour, sound) {
    this.x = startX;
    this.y = startY;
    this.radius = abs(this.x);
    this.theta = PI;
    this.direction = 1;
    this.colour = colour;
    this.sound = sound;
    this.moving = false;
  }

  draw() {
    fill(this.colour);
    circle(this.x, this.y, ballSize);
  }

  updatePosition() {
    if (!this.moving) return;
    const deltaTheta = this.radius / 31415;

    this.theta += deltaTheta * this.direction;

    if (this.theta > 2 * PI) {
      soundOn && this.sound.play();
      this.direction = -1;
      this.theta = 2 * PI - (this.theta % PI);
    } else if (this.theta <= PI) {
      soundOn && this.sound.play();
      this.direction = 1;
      this.theta = PI + abs(PI - this.theta);
    }

    this.x = this.radius * Math.cos(this.theta);
    this.y = this.radius * Math.sin(this.theta);
  }
}
