// Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var screenHeight = window.innerHeight
var screenWidth = window.innerWidth
var shapes = {};
var shapeIndex = 0;
var distance = 0;
var shipStatus = 100;
var fallSpeed = 8;
var shapeGenerateSpeed = 100;

// Setting Canvas Dimensions
window.addEventListener("resize", function(){
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  canvas.width = screenWidth;
  canvas.height = screenHeight;


});
canvas.width = screenWidth;
canvas.height = screenHeight;


document.addEventListener("keydown", function(e){
// console.log(e.which);
if (e.which === 37){
  dude.Velocity.X = -5;
} 
// else if (e.which == 38){
//   dude.Velocity.Y = -5;
// } 
else if (e.which === 39){
  dude.Velocity.X = 5;
} 
// else if (e.which == 40){
//   dude.Velocity.Y = 5;
// }
});


document.addEventListener("keyup", function(){
  dude.Velocity.X = 0;
  dude.Velocity.Y = 0;
});

//Generates Snake Head
function Shape(posX, width, height, round) {
    this.Width = width;
    this.Height = height;
    this.Round = round;
    this.Color = "#0080FF"
    this.Position = {
        X: posX,
        Y: -this.Height
    };
    this.Velocity = Math.random() * fallSpeed + 5;
    this.Velocity = fallSpeed;
    this.Index = shapeIndex;

    shapes[shapeIndex] = this;
    shapeIndex++

    this.checkCollisions = function() {
      if(this.Position.Y >= screenHeight){
        delete shapes[this.Index];
      }
    }
    this.updatePosition = function() {
        this.Position.Y += this.Velocity;
    }
    this.Draw = function() {
        ctx.beginPath();
        ctx.arc(this.Position.X, this.Position.Y, this.Width, 0, 2 *Math.PI);
        ctx.fillStyle = this.Color;
        ctx.fill();
    }
    this.update = function(){
        this.checkCollisions();
        this.updatePosition();
        this.Draw();
    }
}
function Dude(posX, width, height, round){
  this.Width = width;
  this.Height = height;
  this.round = round;
  this.Color = "#575757"
  this.Position = {X: posX, Y: screenHeight-this.Height}
  this.Velocity = {X: 0, Y: 0,}

  this.checkCollisions = function(){
    function collision(a,b){
      if (
        a.Position.X <= b.Position.X + b.Width &&
        a.Position.X + a.Width >= b.Position.X &&
        a.Position.Y + a.Height >= b.Position.Y &&
        a.Position.Y <= b.Position.Y + b.Height ){
          return true
      }
    }
   
      if(collision){
        newGame();
      }
    }
  }
  this.updatePosition = function(){
    this.Position.X += this.Velocity.X;
    this.Position.Y += this.Velocity.Y;
  }
  this.Draw = function(){
    ctx.beginPath();
    ctx.rect(this.Position.X, this.Position.Y, this.Width, this.Height, this.Round);
    ctx.fillStyle = this.Color;
    ctx.fill();
  }
  this.update = function(){
    this.checkCollisions();
    this.updatePosition();
    this.Draw();
  }


var dude = new Dude(screenWidth/2, 30, 30);

function newGame(){
  dude = new Dude(screenWidth/2, 30, 30);
  shapes = {};
  shipStatus = shipStatus - 10;
  console.log(shipStatus)
}
function shapeGenerate(){
  new Shape(Math.random()*screenWidth,40,40);
  distance++
  document.querySelector(".distance").innerHTML = distance
  document.querySelector(".shipStatus").innerHTML = shipStatus
}



setInterval(shapeGenerate, shapeGenerateSpeed);