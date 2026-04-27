let scroll;
let cursorImg;
let button;

function preload() {
  scroll = loadImage('spread4.jpg');
  cursorImg = loadImage("pointerfingerS1.png");
  button = loadImage("nextbutton.png");

}
function setup() {
    createCanvas(1500, 3380);
    noCursor();
} 
function draw() {
  background("white");
  //image loaded in the center of the canvas for scrolling
imageMode(CENTER);
//extended the image to fill the canvas
   image(scroll, 1500/2, 3380/2);

   textFont("Caprasimo");
   textSize(25);
   textAlign(LEFT);
   fill("Black");
  text("Scroll To Explore", 1500/30, 150);
textAlign(LEFT);
fill('darkred');
textSize(45)
  text("The Final", 1500/30, 60);
  text("Run Gallery", 1500/30, 110);

  //fingerbutton image is a button to the next page
  imageMode(CENTER);
    image(button, 1300, 3300);

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
  function mousePressed(){ 
   let d = dist(mouseX,mouseY,1300,3300);
  if (d <= 100){
  window.open('page5.html', '_self');
  }
}
