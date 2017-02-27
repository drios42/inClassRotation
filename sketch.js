var angle = 0;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
}

function draw() {
  background(255);
  
  push();
  translate(mouseX, mouseY);
  rotate(angle);
  rect(100, 0, 50, 250);
  pop();

  ellipse(0, 0, 50, 250);
  angle += .05;
}