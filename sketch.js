var position;
var velocity;

function setup() {
  createCanvas(640, 360);
  background(0);
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
}

function myFunction() {
  position.x = document.getElementById("mynumberX").value;
  document.getElementById("demo").innerHTML = position.x;
   position.y = document.getElementById("mynumberY").value;
  document.getElementById("demo1").innerHTML = position.y;
   velocity.x = document.getElementById("mynumberXspeed").value;
  document.getElementById("demo2").innerHTML = velocity.x;
   velocity.y = document.getElementById("mynumberYspeed").value;
  document.getElementById("demo3").innerHTML = velocity.y;
   position.x = parseFloat(position.x);
   position.y = parseFloat(position.y);
   velocity.x = parseFloat(velocity.x);
   velocity.y = parseFloat(velocity.y);
}
function draw() {
  background(0);
  position.add(velocity);
  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
}
