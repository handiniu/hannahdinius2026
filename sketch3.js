//variable Images
let imgLeft;
let yLeft;

let imgRight;
let yRight;

function preload() {
  imgLeft = loadImage("firstfiveposters.jpg");
  imgRight = loadImage("lastfiveposters.jpg");
 
}
  function setup() {
    createCanvas(windowWidth, windowHeight);

    yLeft = 0;
    yRight = 0;
  }

  function draw() {
  background("white");

   yLeft -= 6;  // move both left images up
  yRight += 6; // move both left images up
  //vertical image loop it will restart at zero
  if (yLeft <= -imgLeft.height) {
    yLeft = 0;
  }
    
  if (yRight >= imgRight.height) {
    yRight = 0;
  }
imageMode(LEFT);
   image(imgLeft, 10, yLeft);
  image(imgLeft, 10, yLeft + imgLeft.height);
imageMode(RIGHT);
  image(imgRight, 800, yRight);
  image(imgRight, 800, yRight - imgRight.height);
  
  }
  function mousePressed(){ 
   let d = dist(mouseX,mouseY,10,height/2);
  if (d <= 600){
  window.open('page4.html', '_self');
  }
}
function mousePressed(){ 
   let d = dist(mouseX,mouseY,800,height/2);
  if (d <= 600){
  window.open('page4.html', '_self');
  }
}