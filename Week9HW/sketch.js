function setup() {
    createCanvas(400, 600);
  }
  
  function draw() {
    background(80, 117, 150);
    textSize(22)
    text("Simple Shapes, Self Portrait", 75,50);
    text("Colin Moon",275,580);
   
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
    rect(175, 75, 70, 120);
   
  //right eye
    circle(240, 130, 40);
    fill(0, 0, 0);
  //right pupil
    strokeWeight(4);
    point(246, 132);
    fill(255, 255, 255);
    
  //nose
    strokeWeight(1);
    triangle(225, 145, 225, 160, 300, 155)
    
    
  //left eye
    circle(211, 132, 40);
    fill(0, 0, 0);
  //left pupil
    strokeWeight(4);
    point(218, 135);
    fill(255, 255, 255);
    
  //main body
    strokeWeight(1);
    rect(160, 195, 105, 200); 
  }