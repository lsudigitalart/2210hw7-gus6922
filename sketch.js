var mySound;
var once = 1;
var actualTime;
var loadTime;
var x=0;
var y=0;
var z=0;
var a=0;
var b=0;

function setup() {
  frameRate(60);
  createCanvas(640, 480);
  background(0);
  mySound = loadSound("01 81autumn.mp3", playMusic);
}

function draw() {
  background(0);
  actualTime = millis() - loadTime;
  println(actualTime);

  if(actualTime > 1000 && actualTime < 2000){
      fill(228,158,77,1000);
      ellipse(width/2, height/2, x);
      x=x+25;
    }
  if(actualTime > 1700){
    background(228,158,77);
    }
  if(actualTime > 2100){
      fill(150,191,236);
      noStroke();
      ellipse(width/2, height/2, y);
      y=y+.5;
    }
    if(actualTime > 12000){
      fill(244,239,76);
      noStroke();
      ellipse(width/2, height/2, z);
      z=z+.5;
      }

    if(actualTime > 23000){
        fill(200,107,114);
        noStroke();
        ellipse(width/2, height/2, a);
        a=a+.5;
        }

        if(actualTime > 34000){
            fill(184,219,152);
            noStroke();
            ellipse(width/2, height/2, b);
            b=b+.5;
            }
}
function playMusic(){
  loadTime = millis();
  mySound.play();
}

// function mouseReleased(){
//   if(once == 1){
//     mySound.pause();
//     once = 0;
//   } else {
//     mySound.play();
//     once = 1;
//   }
// }
