var scAngle,mnAngle,hrAngle
function setup() {
  createCanvas(800,400);



}

function draw() {
  hr  = hour();
  mn = minute();
  sc = second();
  background(255,255,255); 
  scAngle =map(sc,0,60,0,360);
  mnAngle =map(mn,0,60,0,360);
  hrAngle =map(hr,0,12,0,360);
  angleMode(DEGREES); 
  push();
  translate(0,0);

  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  pop();
  push();
  translate(0,0);

  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  pop();
  push();
  translate(0,0);
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  pop();
  drawSprites();
}