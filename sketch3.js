let centerPoster;
let rightPoster;

function preload() {
  leftPoster = loadImage("hesimenposter.jpeg");
  centerPoster = loadImage("nashvilleinposter.jpeg");
  rightPoster = loadImage("nationalchampsposter.jpeg");
}
  function setup() {
    createCanvas(windowWidth, windowHeight);
    yLeft = 0;
    yCenter = 0;
    yRight = 0;
  }

  function draw() {
  background("white");

   yLeft -= 6;  // move both left images up
   yCenter += 6;// move both right images down
  yRight -= 6; // move both left images up
  //vertical image loop it will restart at zero
  if (yLeft <= -leftPoster.height) {
    yLeft = 0;
  }
  if (yCenter >= centerPoster.height) {
    yRight = 0;
  }
  if (yRight >= rightPoster.height) {
    yRight = 0;
  }
   image(leftPoster, 0, yLeft);
  image(leftPoster, 0, yLeft + leftPoster.height);

  image(rightPoster, 250, yRight);
  image(rightPoster, 250, yRight - rightPoster.height);
}
