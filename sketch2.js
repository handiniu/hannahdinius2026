let cursorImg;
let poster; 
let vandercook;
var num = 60; 
var mx = []; 
var my = []; 

//Welcome rolling text variables
 let msg = "WELCOME TO LETTERPRESS 101*";
  let xPos = 0;
  let speed = 2;

function preload(){
  poster = loadImage('mendozacursor.jpg');
  vandercook = loadImage('vandercook.jpg');
}
 
function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();

  
   textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
 text('Custom Font Loaded!', width/1.5, height/2);

  
}

function draw() {
  background("white");
  //curosr image in the center of the cursor
   //image(cursorImg, mouseX, mouseY);
  image(vandercook, width/2 , height/2 )
 //fill("red")
  textFont("Caprasimo");
 // textSize(24);
 // text("Hello!!", width/5, height/3)
  
  //Trail for mouse
  // Source - https://stackoverflow.com/a/69163918
// Posted by Rabbid76
// Retrieved 2026-04-06, License - CC BY-SA 4.0
 frameRate(30); 
    var array_pos = frameCount % num; 
    mx[array_pos] = mouseX; 
    my[array_pos] = mouseY; 

    noStroke();
    fill(255, 0, 0, 127);
    for (var i = 0; i < num; i++) {
  //here i will want to instruct how to move through the array of images I will upload
      var index = (array_pos + 1 + i) % num; 
    image(poster, mx[index], my[index], i, i); 
      
        textStyle("bold");
     fill("red");
  // Draw the text
 text(msg, xPos, 60);
      
  // Create the seamless loop:
  // Draw a second copy immediately after the first
  text(msg, xPos + textWidth(msg), 60);

  
  // Move to the left
//xPos -= ( 3, speed);
  
  // Reset when the first copy is fully off-screen
  if (xPos < -textWidth(msg)) {
    xPos = 0;
     
    }
if(mouseIsPressed) {
  click(); 
}
function mousePressed(){ 
   let d = dist(mouseX,mouseY,width/2,height/2);
  if (d<100){
  window.open('page2.html');

  }
  return false;
}
    }
  }