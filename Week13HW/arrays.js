// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// player
var playerX = 100;
var playerY = 300;

// speeds
var lowest = 8
var highest = 18

// obstacles array
var obstacles = [
  {
    x: 211, y: 130, diameter: 60, speedY: Math.floor(Math.random() * (highest - lowest)) + lowest, color: [0,50,250]
  },
  {
    x: 500, y: 200, diameter: 40, speedY: Math.floor(Math.random() * (highest - lowest)) + lowest, color: [100,0,250]
  },
  {
    x: 400, y: 100, diameter: 50, speedY: Math.floor(Math.random() * (highest - lowest)) + lowest, color: [200,0,100]
  },
  {
    x: 200, y: 100, diameter: 70, speedX: Math.floor(Math.random() * (highest - lowest)) + lowest, color: [50,230,150]
  },
  {
    x: 400, y: 500, diameter: 75, speedX: Math.floor(Math.random() * (highest - lowest)) + lowest, color: [0,200,0]
  }
];

// mouse obstacle
var mouseObstacleX;
var mouseObstacleY;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(80, 117, 150);

// array for obstacle movement
  for (var i = 0; i < obstacles.length; i++) {
    var obs = obstacles[i];
  
    fill(obs.color);
    circle(obs.x, obs.y, obs.diameter);

// vertical movement
    if (i < 3) {
      obs.y += obs.speedY;
      if (obs.y >= 600 || obs.y <= 0) {
        obs.speedY *= -1;
      }
    }
    
// horizontal movement
    if (i ===3 || i===4) {
      obs.x += obs.speedX;
      if (obs.x >= 600 || obs.x <= 0) {
        obs.speedX *= -1;
      }
    }
  }

  createBorders();
  createExit();

  // mouse obstacle
  createMouseObstacle();

  // player
  playerCreate();
  playerPosition();
  playerMovement();
}

function createBorders() {
  fill(0);
  // top
  rect(0, 0, width, 10);
  // left
  rect(0, 0, 10, height);
  // bottom
  rect(0, height - 10, width - 50, 10);
  // right
  rect(width - 10, 0, 10, height);
  // middle
  rect(300, 60, 10, height);
}

function createExit() {
  fill(0);
  textSize(16);
  text("EXIT", width - 90, height - 20);
}

function createMouseObstacle() {
  if (mouseObstacleX && mouseObstacleY) {
    fill(0, 100, 50);
    circle(mouseObstacleX, mouseObstacleY, 50);
  }
}

function mouseClicked() {
  mouseObstacleX = mouseX;
  mouseObstacleY = mouseY;
}

function playerCreate() {
  fill(0);
  circle(playerX, playerY, 25);
}

function playerPosition() {
  if (playerX > width - 90 && playerY > height - 20) {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", 100, 100);
  }
}

function playerMovement() {
  if (keyIsDown(w)) {
    playerY -= 3;
  }
  if (keyIsDown(s)) {
    playerY += 3;
  }
  if (keyIsDown(a)) {
    playerX -= 3;
  }
  if (keyIsDown(d)) {
    playerX += 3;
  }
}
