
var balloonSize = 100;
var balloons = [];
var myCount = 0;
var myClouds = -100;
var tightness = 20;
var r;
var g;
var b;
var score = 0;
var font;
var fontsize_title = 50;
var fontsize_aruaru = 20;
var id = 0;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120, 220, 255);
  cloud(myClouds - 100, 300, 50);
  cloud(myClouds, 500, 80);
  cloud(myClouds - 200, 100, 30);
  cloud(myClouds + 300, 180, 20);
  myClouds += 0.1;
  if (myClouds == windowWidth + 100) {
    myClouds = 0;
  }
  for (var i = 0; i < balloons.length; i++) {
    balloons[i].move();
    balloons[i].drawBalloon();
    
    if (balloons.length > 50) {
      balloons.splice(0, 1);
    }
  }

  if (myCount == 75) {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    balloons.push(new Balloon(random(0, windowWidth), windowHeight + 150, balloonSize, r, g, b, Math.floor( Math.random() * 3 )));
    myCount = 0;
  }
  myCount++;
  fill(255);
  textSize(fontsize_title);
  text("Cyber Radio", windowWidth/2-100, windowHeight/2-100);
}

function cloud(x, y, size) {
  fill(255, 255, 255);
  noStroke();
  ellipse(x, y, size, size);
  ellipse(x + size / 2, y - size / 3, size, size);
  ellipse(x + size / 2, y, size, size);
  ellipse(x + size, y, size, size);
}


var Balloon = function(positionX, positionY, balloonSize, colorR, colorG, colorB, id) {

  this.positionX = positionX;
  this.positionY = positionY;
  this.balloonSize = balloonSize;
  this.balloonTie = 52;
  this.moveUp = 1.2;
  this.colorR = colorR;
  this.colorG = colorG;
  this.colorB = colorB;

  this.drawBalloon = function() {

    // body
    noStroke();
    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.positionX, this.positionY, this.balloonSize, this.balloonSize);
    ellipse(this.positionX, this.positionY + 5, this.balloonSize / 1.06, (this.balloonSize / 1.4) + 30);
    ellipse(this.positionX, this.positionY + 5, this.balloonSize / 1.06, (this.balloonSize / 1.4) + 30);
    textSize(fontsize_aruaru);
    fill(255);
    text(aruaru[id].odai, this.positionX-100, this.positionY-10);
    text(aruaru[id].neta, this.positionX-80, this.positionY+20);
    text(aruaru[id].name, this.positionX-80, this.positionY+50);

    // tie
    stroke(160);
    strokeWeight(1);
    line(this.positionX, this.positionY + this.balloonTie, this.positionX, this.positionY + this.balloonTie + 100);
    noStroke();
    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.positionX, this.positionY + this.balloonTie, 10, 10);

  };

  this.move = function() {
    this.positionY = this.positionY - this.moveUp;
  };

　var aruaru = [
    {
        odai: "Git"+"あるある",
        neta: "モザイクタイル見ると芝生に見えがち",
        name: "by"+"crane_memory"
    },
    {
        odai: "Python"+"あるある",
        neta: "ワンライナーやりたくなりがち",
        name: "by"+"drumato"
    },
    {
        odai: "セキュキャン"+"あるある",
        neta: "誰かしらスーツケースを忘れるらしい",
        name: "by"+"バイナリ大好きbotだったひと"
    },
    {
        odai: "OS自作"+"あるある",
        neta: "リンカのバグで意図しないジャンプアドレスが埋め込まれる",
        name: "by"+"uchan"
    }
]


};