let cursorImg;


//Pointing finger cursor
function preload(){
  cursorImg = loadImage("Pointer finger.png");
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

    let x = width/2.25; 
  let y = width/1.9; 
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
  text("Press To Start",x, y + 10);
    
  
  
  //curosr image in the center of the cursor
  imageMode(CENTER); 
   image(cursorImg, mouseX, mouseY);

if(mouseIsPressed) {
  click(); 
}
  
}


function click(){
  let x = width/2; 
  let y = width/2; 
  let d = 250; 
  let e = 70; 

  let link = dist(mouseX, mouseY, x, y); 

  if (link <= 35)
{
  window.open('page2.html');

}
}
