let scroll;

function preload() {
  scroll = loadImage('spread4.jpg');
}
function setup() {
    createCanvas(1500, 3380);
}
function draw() {
  background("white");
  //image loaded in the center of the canvas for scrolling
imageMode(CENTER);
   image(scroll, 1500/2, 3380/2);
}