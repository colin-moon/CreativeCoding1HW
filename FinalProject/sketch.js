var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var playerX = 350;
var playerY = 350;
var playerRadius = 5;

var walls = [
// Center Box
  { x: 300, y: 300, w: 100, h: 10 }, // Top
  { x: 300, y: 390, w: 30, h: 10 }, // Bottom (left)
  { x: 370, y: 390, w: 30, h: 10 }, // Bottom (right)
  { x: 300, y: 300, w: 10, h: 100 }, // Left
  { x: 390, y: 300, w: 10, h: 100 }, // Right
// First ring (outermost ring)
  { x: 30, y: 30, w: 260, h: 10 }, // Top (left)
  { x: 320, y: 30, w: 250, h: 10 }, // Top (middle)
  { x: 600, y: 30, w: 70, h: 10 }, // Top (right)
  { x: 30, y: 660, w: 380, h: 10 }, // Bottom (left)
  { x: 440, y: 660, w: 230, h: 10 }, // Bottom (right)
  { x: 30, y: 30, w: 10, h: 640 }, // Left
  { x: 660, y: 30, w: 10, h: 640 }, // Right
// Second ring
  { x: 60, y: 60, w: 380, h: 10 }, // Top (left)
  { x: 470, y: 60, w: 170, h: 10 }, // Top (right)
  { x: 60, y: 630, w: 500, h: 10 }, // Bottom (left)
  { x: 590, y: 630, w: 50, h: 10 }, // Bottom (right)
  { x: 60, y: 60, w: 10, h: 60 }, // Left (top)
  { x: 60, y: 150, w: 10, h: 400 }, // Left (middle)
  { x: 60, y: 580, w: 10, h: 60 }, // Left (bottom)
  { x: 630, y: 60, w: 10, h: 170 }, // Right (top)
  { x: 630, y: 260, w: 10, h: 380 }, // Right (bottom)
// Third ring
  { x: 90, y: 90, w: 40, h: 10 }, // Top (left)
  { x: 160, y: 90, w: 370, h: 10 }, // Top (middle)
  { x: 560, y: 90, w: 50, h: 10 }, // Top (right)
  { x: 90, y: 600, w: 520, h: 10 }, // Bottom
  { x: 90, y: 90, w: 10, h: 100 }, // Left (top)
  { x: 90, y: 220, w: 10, h: 110 }, // Left (middle)
  { x: 90, y: 360, w: 10, h: 250 }, // Left (bottom)
  { x: 600, y: 90, w: 10, h: 400 }, // Right (top)
  { x: 600, y: 520, w: 10, h: 90 }, // Right (bottom)
// Fourth ring
  { x: 90, y: 120, w: 490, h: 10 }, // Top
  { x: 120, y: 570, w: 120, h: 10 }, // Bottom (left)
  { x: 270, y: 570, w: 310, h: 10 }, // Bottom (right)
  { x: 120, y: 120, w: 10, h: 150 }, // Left (top)
  { x: 120, y: 300, w: 10, h: 280 }, // Left (bottom)
  { x: 570, y: 120, w: 10, h: 460 }, // Right
//Fifth ring
  { x: 150, y: 150, w: 80, h: 10 }, // Top (left)
  { x: 260, y: 150, w: 290, h: 10 }, // Top (right)
  { x: 150, y: 540, w: 40, h: 10 }, // Bottom (left)
  { x: 220, y: 540, w: 330, h: 10 }, // Bottom
  { x: 150, y: 150, w: 10, h: 400 }, // Left
  { x: 540, y: 150, w: 10, h: 40 }, // Right (top)
  { x: 540, y: 220, w: 10, h: 110 }, // Right (middle 1)
  { x: 540, y: 360, w: 10, h: 80 }, // Right (middle 2)
  { x: 540, y: 470, w: 10, h: 80 }, // Right (bottom)
// Sixth ring
  { x: 180, y: 180, w: 190, h: 10 }, // Top (left)
  { x: 400, y: 180, w: 120, h: 10 }, // Top (right)
  { x: 180, y: 510, w: 260, h: 10 }, // Bottom (left)
  { x: 470, y: 510, w: 50, h: 10 }, // Bottom (right)
  { x: 180, y: 180, w: 10, h: 50 }, // Left (top)
  { x: 180, y: 260, w: 10, h: 160 }, // Left (middle)
  { x: 180, y: 450, w: 10, h: 70 }, // Left (bottom)
  { x: 510, y: 180, w: 10, h: 50 }, // Right (top)
  { x: 510, y: 260, w: 10, h: 130 }, // Right (middle)
  { x: 510, y: 420, w: 10, h: 100 }, // Right (bottom)
// Seventh ring
  { x: 210, y: 210, w: 280, h: 10 }, // Top
  { x: 210, y: 480, w: 150, h: 10 }, // Bottom (left)
  { x: 390, y: 480, w: 100, h: 10 }, // Bottom (right)
  { x: 210, y: 210, w: 10, h: 280 }, // Left
  { x: 480, y: 210, w: 10, h: 100 }, // Right (top)
  { x: 480, y: 340, w: 10, h: 150 }, // Right (bottom)
// Eighth ring
  { x: 240, y: 240, w: 220, h: 10 }, // Top
  { x: 240, y: 450, w: 30, h: 10 }, // Bottom (left)
  { x: 300, y: 450, w: 160, h: 10 }, // Bottm (right)

  { x: 240, y: 240, w: 10, h: 50 }, // Left (top)
  { x: 240, y: 320, w: 10, h: 140 }, // Left (bottom)
  { x: 450, y: 240, w: 10, h: 220 }, // Right
// Ninth ring
  { x: 270, y: 270, w: 40, h: 10 }, // Top (left)
  { x: 340, y: 270, w: 90, h: 10 }, // Top
  { x: 270, y: 420, w: 160, h: 10 }, // Bottom
  { x: 270, y: 270, w: 10, h: 160 }, // Left
  { x: 420, y: 270, w: 10, h: 160 }, // Rights
  
// Veritcal blocks
  { x: 520, y: 0, w: 10, h: 40 }, 
  { x: 380, y: 30, w: 10, h: 40 }, 
  { x: 200, y: 630, w: 10, h: 40 }, 
  { x: 510, y: 630, w: 10, h: 40 }, 
  { x: 190, y: 60, w: 10, h: 40 }, 
  { x: 450, y: 570, w: 10, h: 40 }, 
  { x: 160, y: 540, w: 10, h: 40 }, 
  { x: 190, y: 150, w: 10, h: 40 }, 
  { x: 330, y: 150, w: 10, h: 40 }, 
  { x: 290, y: 510, w: 10, h: 40 }, 
  { x: 460, y: 180, w: 10, h: 40 }, 
  { x: 410, y: 480, w: 10, h: 40 }, 
  { x: 280, y: 210, w: 10, h: 40 }, 
  { x: 430, y: 450, w: 10, h: 40 }, 
  { x: 360, y: 240, w: 10, h: 40 }, 
// Horizontal blocks 
  { x: 660, y: 60, w: 40, h: 10 }, 
  { x: 660, y: 580, w: 40, h: 10 },  
  { x: 30, y: 420, w: 40, h: 10 }, 
  { x: 630, y: 100, w: 40, h: 10 }, 
  { x: 60, y: 250, w: 40, h: 10 }, 
  { x: 600, y: 580, w: 40, h: 10 }, 
  { x: 90, y: 300, w: 40, h: 10 }, 
  { x: 570, y: 200, w: 40, h: 10 }, 
  { x: 120, y: 150, w: 40, h: 10 }, 
  { x: 540, y: 400, w: 40, h: 10 }, 
  { x: 150, y: 470, w: 40, h: 10 }, 
  { x: 510, y: 300, w: 40, h: 10 }, 
  { x: 510, y: 420, w: 40, h: 10 }, 
  { x: 480, y: 350, w: 40, h: 10 }, 
  { x: 240, y: 370, w: 40, h: 10 }, 
  { x: 420, y: 400, w: 40, h: 10 }, 
  { x: 270, y: 320, w: 40, h: 10 }, 
];

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  
  createBorders();
  createWalls();

// Collision Detection
  borderCollision();
  wallCollision();

// Player Functions
  playerCreate();
  playerMovement();
}

function createBorders() {
  fill(0);
  // Top
  rect(0, 0, width, 10);
  // Left
  rect(0, 0, 10, height);
  // Bottom
  rect(0, height - 10, width - 30, 10);
  // Right
  rect(width - 10, 0, 10, height);
}

function createWalls() {
  fill(0);
  for (var wall of walls) {
    rect(wall.x, wall.y, wall.w, wall.h);
  }
}

function playerCreate() {
  fill(255, 235, 0);
  circle(playerX, playerY, playerRadius * 2);
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

function borderCollision() {
  
  var exitX = width - 30;
  var exitY = height - 50;
// Makes sure the player won't get reset if they make it to the exit
  if (!(playerX > exitX && playerY > exitY)) {
    if (
      playerX - playerRadius <= 10 || // Left border
      playerX + playerRadius >= width - 10 || // Right border
      playerY - playerRadius <= 10 || // Top border
      playerY + playerRadius >= height - 10 // Bottom border
    ) {
      resetPlayer();
    }
  }
}
function wallCollision() {
  for (let wall of walls) {
    if (
      playerX + playerRadius > wall.x &&
      playerX - playerRadius < wall.x + wall.w &&
      playerY + playerRadius > wall.y &&
      playerY - playerRadius < wall.y + wall.h
    ) {
      resetPlayer();
      break;
    }
  }
}

function resetPlayer() {
  playerX = 350;
  playerY = 350;
}