let hum="";
let comp;
function play(){
hum=prompt("enter your choice(rock,paper,scissor)");
let r=Math.random();
comp;
if(r<=0.33){
    comp="rock"
}
else if(r<=0.66){
    comp="paper"
}
else{
    comp="scissor"
}
}

console.log("welcom to the game");
play();

if(comp==hum){
    console.log("computers choice "+comp);
    console.log("draw round");
    setTimeout(() => {
        location.reload();
    }, 5000);
}
else if(comp=="rock" && hum=="paper"){
    console.log("computers choice "+comp);
    console.log("you won the round");
    setTimeout(() => {
        location.reload();
    }, 5000);
}
else if(comp=="rock" && hum=="scissor"){
    console.log("computers choice "+comp);
    console.log("computer the round");
    setTimeout(() => {
        location.reload();
    }, 5000);
}
else if(comp=="paper" && hum=="scissor"){
    console.log("computers choice "+comp);
    console.log("human the round");
    setTimeout(() => {
        location.reload();
    }, 5000);
}
else if(comp=="paper" && hum=="rock"){
    console.log("computers choice "+comp);
    console.log("computer the round");
    setTimeout(() => {
        location.reload();
    }, 5000);
}
else if(comp=="scissor" && hum=="rock"){
    console.log("computers choice "+comp);
    console.log("human the round");
    setTimeout(() => {
        location.reload();
    }, 5000);
}
else if(comp=="scissor" && hum=="paper"){
    console.log("computers choice "+comp);
    console.log("computer the round");
    setTimeout(() => {
        location.reload();
    }, 5000);
}
else{
    console.log("something went wroong");
    
}
