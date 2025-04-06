var ts = 5;
var textgrowAmount = 1;
var textgrow = true;
var growAmount = 1;
var grow = true;
var diameter = 40;
var righteyex = 240;    
var lefteyey = 132;
var bodyx = 160;
var headx = 175;
var heady = 75;
var eyemovementx = Math.floor(Math.random() * 10) + 1;
var eyemovementy = Math.floor(Math.random() * 10) + 1;
var bodymovement = Math.floor(Math.random() * 10) + 1;
var headmovementx = Math.floor(Math.random() * 10) + 1;
var headmovementy = Math.floor(Math.random() * 10) + 1;
function setup() {
    createCanvas(400, 600);
  }
  
  function draw() {
    background(80, 117, 150);
    text("Colin Moon",275,580);
    text("Simple Shapes, Self Portrait", 75,50);
  //Text size and growing/shirnking
    textSize(ts)
    if (ts > 25) {
    textgrow = false
  }
  if (ts < 15) {
    textgrow = true
  }
  
  if (textgrow == true) {
    ts += textgrowAmount
  } else {
    ts  -= textgrowAmount
  }
   
  
  //arms
    strokeWeight(5)
    line(170,200,100,300);
    line(255,200,325,300);
  //legs
    line(195,390,195,475);
    line(230,390,230,475);
  //feet
    line(195,475,210,475);
    line(230,475,245,475);
    
  //head
    strokeWeight(1);
    rect(headx, heady, 70, 120);
  //head movement x
    if (headx >= 400 || headx <= 0) {
    headmovementx *= -1;
  }
  headx += headmovementx ; 
  //headmovement y
    if (heady >= 600 || heady <= 0) {
    headmovementy *= -1;
  }
  heady += headmovementy ; 
   
  //right eye
    circle(righteyex, 130, diameter);
    fill(0, 0, 0);
  //right eye movement
if (righteyex >= 400 || righteyex <= 0) {
    eyemovementx *= -1;
  }
  righteyex += eyemovementx; 
  //eye growth
if (diameter > 200) {
    grow = false
  }
  if (diameter < 40) {
    grow = true
  }
  
  if (grow == true) {
    diameter += growAmount
  } else {
    diameter -= growAmount
  }
    
  //right pupil
    strokeWeight(4);
    point(246, 132);
    fill(255, 255, 255);
    
  //nose
    strokeWeight(1);
    triangle(225, 145, 225, 160, 300, 155)
    
  //left eye
    circle(211, lefteyey, 40);
    fill(0, 0, 0);
  //left eye movement
    if (lefteyey >= 600 || lefteyey <= 0) {
    eyemovementy *= -1;
  }
  lefteyey += eyemovementy; 
    
  //left pupil
    strokeWeight(4);
    point(218, 135);
    fill(255, 255, 255);
  //main body
    strokeWeight(1);
    rect(bodyx, 195, 105, 200); 
  //body movement
    if (bodyx >= 400 || bodyx <= 0) {
    bodymovement *= -1;
  }
  bodyx += bodymovement; 
   
   }  