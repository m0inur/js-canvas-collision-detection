var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
var mouse = {
  x: 10,
  y: 10
}

var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Utility Functions
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomCol(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1
  let yDistance = y2 - y1

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}
// Objects
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.update = function () {
    this.x = mouse.x;
    this.y = mouse.y;
    this.draw();
  };


  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke
    c.closePath()
  };
}

var circle1;
var circle2;
var randomColors = randomCol(colors)

function init() {
  circle1 = new Circle(300, 300, 20, '#FFF6E5')
  circle2 = new Circle(10, 10, 20, '#FFF6E5')

}


// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)

  circle1.update()
  circle2.update()
  circle2.x = mouse.x
  circle2.y = mouse.y

  if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) > circle1.radius + circle2.radius) {
    circle1.x += 3
    circle1.y -= 3
  } else if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
    circle1.x -= 2
    circle1.y += 2
  } else {
    circle1.color = randomColors
  }
}

init()
animate()