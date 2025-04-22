// key codes
let w = 87; 
let s = 83;
let a = 65;
let d = 68;

let playerX = 100;
let playerY = 300;

// obstacle one movement variables
let ob1 = 130;
let ob1Movement = Math.floor(Math.random() * 10) + 1

// obstacle two movement variables
let ob2 = 200;
let ob2Movement = Math.floor(Math.random() * 10) + 1

let mouseObstacleX;
let mouseObstacleY;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(80, 117, 150);
   
  createBorders();
  
  createExit();

//Obstacle one
  createObstacle1();
  obstacle1Movement();

//Obstacle two
  createObstacle2();
  obstacle2Movement();
  
//Mouse obstacle
  createMouseObstacle(); 

// Player functions
  playerCreate();
  playerposition();
  playerMovement();
  
  
}

function createBorders(thickness)
{
    fill(0,0,0);
    // top 
    rect(0,0,width,10);
    // left 
    rect(0,0,10,height);
    // bottom 
    rect(0, height-10,width-50, 10);
    // right
    rect(width-10,0,10,height);
    //middle
    rect(300,0,10,height-60);
}

function createExit() {
  fill(0,0,0);
  textSize(16);
  text("EXIT", width-90,height-20)
}

//Obstacle functions
function createObstacle1() {
   fill(0,50,250);
   circle(211,ob1,60);
}
function obstacle1Movement() {
  if (ob1 >= 600 || ob1 <= 0) {
    ob1Movement *= -1;
  }
  ob1 += ob1Movement;  
}
function createObstacle2() {
  fill(100,0,250);
  circle(430,ob2,40);
}
function obstacle2Movement() {
  if (ob2 >= 600 || ob2 <= 0) {
    ob2Movement *= -1;
  }
  ob2 += ob2Movement; 
}

//Mouse functions
function createMouseObstacle() {
  fill(0,100,50);
  circle(mouseObstacleX, mouseObstacleY, 50);
}
function mouseClicked()
{
    mouseObstacleX = mouseX;
    mouseObstacleY = mouseY;
}

//Player functions
function playerCreate (x,y) {
  fill(0,0,0);
  characterX = x;
  characterY = y;
}
function playerposition() {
  circle(playerX,playerY,25);
  if(playerX > width - 550 && playerY > width)
    {
      fill(0,0,0);
      stroke(5);
      textSize(26);
      text("You Win!",100,100);
    }
     
}
function playerMovement() {
    if(keyIsDown(w))
    {
        playerY -= 3;   
    }
    if(keyIsDown(s))
    {
        playerY += 3;   
    }
    if(keyIsDown(a))
    {
        playerX -= 3;   
    }
    if(keyIsDown(d))
    {
        playerX += 3;   
    }
}