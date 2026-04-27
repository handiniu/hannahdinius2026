let frames;
let cursorImg;

let apples = [];
let index = 0;
let btn;


function preload(){
    frames = loadImage("spread5.png");
    cursorImg = loadImage("pointerfingerS1.png");

     apples[0] = loadImage('process1.jpg');
  apples[1] = loadImage('process2.jpg');
  apples[2] = loadImage('process3.jpg');
  apples[3] = loadImage('process4.jpg');
  apples[4] = loadImage('process5.jpg');
 apples[5] = loadImage('process6.jpg');
  apples[6] = loadImage('process7.jpg');
  apples[7] = loadImage('process8.jpg');
  apples[8] = loadImage('process9.jpg');
  apples[9] = loadImage('process10.jpg');


    }
    function setup() {
   createCanvas(windowWidth, windowHeight);
    noCursor();
     btn = createButton("Process");
  btn.position(5, 5);
  btn.mousePressed(nextApple);
   btn.style("color", "darkred"); 
  btn.style("background-color", "white"); 
    }
function draw() {
  background('darkred');
  
//curosr image in the center of the cursor
  imageMode(CENTER); 
   image(cursorImg, mouseX, mouseY);
 
  //image loaded in the center of the canvas for scrolling
   imageMode(CENTER);
  image(apples[index], 935, 315);
  //frame image centered and where they are placed
 imageMode(CENTER);
   image(frames, windowWidth/2, windowHeight/2);
}
function nextApple() {
  index = index + 1;
  if (index == apples.length) {
    index = 0;
  }
  function windowResized() {
  resizeCanvas(1600, 865);  
}

}
