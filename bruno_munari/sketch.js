let yMouth = 400;
let yEyes = 150; // eyes position
let dEyes = 30; // eyes size
function setup() {
  createCanvas(500, 500);
  }
  
  function draw() {
	background(255);
  strokeWeight(8)
  stroke(0)

  //Vertical lines
  line(50,50,50,450)
  line(150,50,150,450)
  line(250,50,250,450)
  line(350,50,350,450)
  line(450,50,450,450)
  
  // Horizontal lines
  line(50,50,450,50)
  line(50,150,450,150)
  line(50,250,450,250)
  line(50,350,450,350)
  line(50,450,450,450)
  
  // Mouth
  line(150,yMouth,350,yMouth)
  
  // Nose
  line(150,250,250,350)
  line(250,350,350,250)
  
  // Eyes
  line(50, 150,150,50)
  line(150,50,250,150)
  line(250,150,350,50)
  line(350,50,450,150)
  fill(0)
  noStroke()
  circle(150,yEyes,dEyes)
  circle(350,yEyes,dEyes)
  }
  
  function keyPressed(){
    console.log("key pressed");
    save("face_bruno_munari.png");
  }