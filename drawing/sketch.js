let n = 2;
let color = "#8ecae6";
function setup() {
	createCanvas(800, 500);
  background(0);
  }
  
  function draw() {
    stroke(2)
    fill(color)
    if (mouseIsPressed)
  {
    circle(mouseX, mouseY, n);
    n = n + 1;
    color = color - 10;
  }
  else
  {
    n = 2;
  }
  }

  function keyPressed(){
    save("model.png")
  background(0);
    n = 2;
  }