var box1,box2,box3,box4,box5;
var tri,tri2,tri3;
function setup(){
  var canvas = createCanvas(800,400);
  box1 = createSprite(400,300,135,200);
  box2 = createSprite(500,275,60,250);
  box3 = createSprite(300,275,60,250);
  box4 = createSprite(542.5,250,20,300);
  box5 = createSprite(257.5,250,20,300);
}
function draw(){
  background(0);
  tri = triangle(332.5,200,400,100,467.5,200);
  tri2 = triangle(532.5,100,542.5,80,552.5,100);
  tri3 = triangle(247.5,100,257.5,80,267.5,100);
  
  drawSprites();
}