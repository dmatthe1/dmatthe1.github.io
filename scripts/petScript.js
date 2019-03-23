let canvas = document.getElementById("petCenter");
let gContext = canvas.getContext("2d");

let hunger = 100;
let movement = 5;

let tamagochi = {
    x: canvas.width/2,
    y: canvas.height/2,
    width: 32,
    height: 25
};

let FPS = 30;

setInterval(function(){
    update();
    draw();
}, 1000/FPS);

function start(){
    gContext.fillStyle = '#444444';//'#DCD6D6';
    gContext.fillRect(0, 0, canvas.width, canvas.height);
}

function update(){
    
}

function draw(){

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
