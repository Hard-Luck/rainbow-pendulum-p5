var Ball = (function () {
    function Ball(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.radius = abs(this.x);
        this.theta = PI;
        this.direction = 1;
    }
    Ball.prototype.draw = function () {
        fill(255);
        circle(this.x, this.y, ballSize);
    };
    Ball.prototype.updatePosition = function () {
        var deltaTheta = 1 / this.radius;
        this.theta += deltaTheta * this.direction;
        if (this.theta > 2 * PI) {
            this.direction = -1;
            this.theta = 2 * PI - (this.theta % PI);
        }
        else if (this.theta <= PI) {
            this.direction = 1;
            this.theta = PI + abs(PI - this.theta);
        }
        this.x = this.radius * Math.cos(this.theta);
        this.y = this.radius * Math.sin(this.theta);
    };
    return Ball;
}());
var WIDTH = 600;
var HEIGHT = 300;
var lines = 30;
var ballSize = 10;
var balls = [];
var speed = 2;
var drawBalls = function () {
    balls.forEach(function (b) { return b.draw(); });
};
var updateBalls = function () {
    balls.forEach(function (b) { return b.updatePosition(); });
};
function setup() {
    createCanvas(WIDTH, HEIGHT);
    for (var i = 0; i < lines; ++i) {
        balls.push(new Ball(((WIDTH / lines) * i) / 2 - WIDTH / 2, 0));
    }
    drawBalls();
}
function draw() {
    background(220);
    translate(WIDTH / 2, HEIGHT);
    noFill();
    for (var i = 1; i <= lines; ++i) {
        circle(0, 0, (WIDTH / lines) * i);
    }
    for (var j = 0; j < speed; j++) {
        updateBalls();
    }
    drawBalls();
}
//# sourceMappingURL=build.js.map