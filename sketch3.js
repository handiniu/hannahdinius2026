//variable Images
let imgLeft;
let yLeft;

let imgRight;
let yRight;

function preload() {
  imgLeft = loadImage("poster1.png");
  imgRight = loadImage("poster1.png");
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
   image(imgLeft, 0, yLeft);
  image(imgLeft, 0, yLeft + imgLeft.height);

  image(imgRight, 250, yRight);
  image(imgRight, 250, yRight - imgRight.height);

  }