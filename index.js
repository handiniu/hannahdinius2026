let cursorImg;
let ratio; 


//Pointing finger cursor
function preload(){
  cursorImg = loadImage("pointerfingerS1.png");
  //Upload a new image with as a png so there is no white background
  //resource https://editor.p5js.org/xinxin/sketches/6GBSGiQGT
}
function setup() {
  //Screen size
    createCanvas(windowWidth, windowHeight);
    noCursor();
}

function draw() {
  
  background("white");

  let x = width/2; 
  let y = height/2; 
  let d = 250; 
  let e = 70; 
   
  //Start button
  fill("red");
  noStroke();
  ellipse(x, y, d, e);
  //resource for ellipse and how to center align it with the canvas https://editor.p5js.org/dipikatitus/sketches/27ebpsz1A

  
  fill("white");
  textFont("Caprasimo");
  textSize(24);
  textAlign(CENTER);
  text("Press To Start", x, y + 10);
    
  
  
  //curosr image in the center of the cursor
  imageMode(CENTER); 
   image(cursorImg, mouseX, mouseY);

}


function mousePressed(){ 
   let d = dist(mouseX,mouseY,width/2,height/2);
  if (d <= 100){
  window.open('page2.html', '_self');

  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  
}

