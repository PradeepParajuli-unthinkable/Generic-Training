const mainBlock = document.querySelector(".main-block");
const ptag = document.getElementsByTagName("p")[0];


function display(text, colour){
    console.log(text)
   ptag.innerText = text;
   mainBlock.style.backgroundColor = colour;
}

//clicked
mainBlock.addEventListener("click",()=>{
    display("Clicked", "red")
});

//doubleClick
mainBlock.addEventListener("dblclick",()=>{
    display("Double click","blue")
});

//onMouseover
mainBlock.addEventListener("mouseover",()=>{
    display("mouseover","green")
});

//onMouseout
mainBlock.addEventListener("mouseout",()=>{
    display("mouseout","yellow")
});


//onKeyDown
document.addEventListener("keydown",()=>{
    display("keyDown","#fff")
});

//onKeyUp
document.addEventListener("keyup",()=>{
    display("keyUP","pale")
});

//online
document.addEventListener("keypress",()=>{
    setTimeout(() => {
        display("keypress","gold")
    }, 100);
    
});
