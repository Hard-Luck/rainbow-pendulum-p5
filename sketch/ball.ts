class Ball {
  x: number;
  y: number;
  radius: number;
  theta: number;
  direction: number;

  constructor(startX: number, startY: number) {
    this.x = startX;
    this.y = startY;
    this.radius = abs(this.x);
    this.theta = PI;
    this.direction = 1;
  }

  draw() {
    fill(255);
    circle(this.x, this.y, ballSize);
  }

  updatePosition() {
    const deltaTheta = 1 / this.radius;

    this.theta += deltaTheta * this.direction;

    if (this.theta > 2 * PI) {
      this.direction = -1;
      this.theta = 2 * PI - (this.theta % PI);
    } else if (this.theta <= PI) {
      this.direction = 1;
      this.theta = PI + abs(PI - this.theta);
    }

    this.x = this.radius * Math.cos(this.theta);
    this.y = this.radius * Math.sin(this.theta);
  }
}
