let result = document.getElementById("result");
let check = document.getElementById("btn");
let input = document.getElementById("input");
let newGame = document.getElementById("newGame");

let success = {
    color: "black",
    bg: "green",
    text:"Success"
};
let tooLow = {
    color: "black",
    bg: "blue",
    text:"Too Low"
};
let tooHigh = {
    color: "black",
    bg: "red",
    text:"Too high"
};
var value;

newGame.addEventListener("click",()=>{
    genrateNew();
    input.focus();
})

function genrateNew(){
    console.log("New Game");
    value = Math.floor(Math.random()*100);
    console.warn("result: "+value);
    result.innerText = "";
    input.value = "";
    input.focus();
}
genrateNew() // start game onload of page.


check.addEventListener("click", ()=>{
    if(Math.floor(input.value) < value){
        result.innerText = tooLow.text;
        result.style.backgroundColor = tooLow.bg;
        result.style.color = tooLow.color;
    }else if (Math.floor(input.value) > value){
        result.innerText = tooHigh.text;
        result.style.backgroundColor = tooHigh.bg;
        result.style.color = tooHigh.color;
    }else{
        result.innerText = success.text;
        result.style.backgroundColor = success.bg;
        result.style.color = success.color;
    }
})