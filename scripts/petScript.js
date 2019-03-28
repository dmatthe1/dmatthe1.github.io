let canvas = document.getElementById("petCenter");
let context = canvas.getContext("2d");

let hunger = 100;
let movement = 5;

let keys = [];

let tamagochi = {
    x: canvas.width/2,
    y: canvas.height/2,
    width: 32,
    height: 25
};

let FPS = 30;

start();

setInterval(function(){
    update();
    draw();
}, 1000/FPS);

function start(){
    context.fillStyle = '#444444';//'#DCD6D6';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function update(){

}

function draw(){
  context.fillStyle = '#FFFFFF';//'#DCD6D6';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#444444';

  tamagochiControls();
  drawPet();
  console.log(tamagochi.x + " " + tamagochi.y);
}

function drawPet() {
  context.beginPath();
  context.arc(tamagochi.x, tamagochi.y, 50, 0, 2 * Math.PI);
  context.stroke();
}

function tamagochiControls() {
  //tamagochi Movement
  if (keys[38]) if (tamagochi.y - tamagochi.height/2 - movement > 0) tamagochi.y -= movement;
  if (keys[40]) if (tamagochi.y + tamagochi.height/2 + movement < canvas.height) tamagochi.y += movement;
  if (keys[37]) if (tamagochi.x - tamagochi.width/2 - movement > 0) tamagochi.x -= movement;
  if (keys[39]) if (tamagochi.x + tamagochi.width/2 + movement < canvas.width) tamagochi.x += movement;
}

/*
let train = document.createElement("button");
train.innerHTML = "Train";
let battle = document.createElement("button");
battle.innerHTML = "Battle";
let care = document.createElement("button");
care.innerHTML = "Care";
let frolick = document.createElement("button");
frolick.innerHTML = "Frolick";

train.addEventListener ("click", function() {
    //alert("did something");
    //Move to training mode
});
battle.addEventListener ("click", function() {
    //alert("did something");
    //Move to battle mode
});
care.addEventListener ("click", function() {
    //alert("did something");
    //Move to care mode
});

frolick.addEventListener ("click", function() {
    //alert("did something");
    //Move to frolick mode
});
*/
