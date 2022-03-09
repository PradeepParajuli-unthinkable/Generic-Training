// Array Methods
var salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const ul = document.getElementsByClassName("main-array")[0];
let main = document.querySelector("main");
let pushSalad = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓'];
// display
function display() {
    ul.innerHTML = "";
    for(let i of salad){
        // li.append(`<li>${i}</li>`);
        ul.innerHTML += `<li>${i}</li>`;
    }
}
display(salad);



// addEventListener
document.getElementById("length").addEventListener('click',getLength);
document.getElementById("delete").addEventListener('click',deleteArray);
document.getElementById("pop").addEventListener('click',popArray);
document.getElementById("push").addEventListener('click',pushArray);
document.getElementById("toString").addEventListener('click',toStringArray);
document.getElementById("shiftElement").addEventListener('click',shiftingArray);
document.getElementById("unshift").addEventListener('click',unshiftArray);
document.getElementById("splice").addEventListener('click',spliceArray);
document.getElementById("sort").addEventListener('click',sortArray);

//1. Arrays to String
function toStringArray(){
    console.log(salad.toString());
    let text = `
    <h3>toString()</h3>
    <h3>${salad.toString()}</h3>
    `;
    main.innerHTML = text;
}
//2. Poping 
function popArray(){
    salad.pop();
    display();
    let text = "<h3>pop()</h3>";
    main.innerHTML = text;
}
//3. pushing
function pushArray(){
    let enoj = pushSalad[0];
    pushSalad = pushSalad.splice(1,pushSalad.length);
    pushSalad = pushSalad.concat([enoj]);
    salad.push(enoj);

    let text = `
    <h3>Next Icons - push()</h3>
    <h3>${pushSalad.slice(0,5)}</h3>
    `
    main.innerHTML = text;
    display();
}
//3. Shifting elements
function shiftingArray(){
    let text = `
    <h3>shift()</h3>
    `
    main.innerHTML = text;
    salad.shift();
    display();
}

//4. unshift
function unshiftArray(){
    let enoj = pushSalad[0];
    pushSalad = pushSalad.slice(1,pushSalad.length-1);
    pushSalad.push(enoj);
    salad.unshift(enoj);

    let text = `
    <h3>Next Icons - unshift()</h3>
    <h3>${pushSalad.slice(0,5)}</h3>
    `
    main.innerHTML = text;
    display();
}

//5. length
function getLength(){
    let text = `<h3>length</h3>
    <h3>${salad.length}</h3>`;
    main.innerHTML = text;
    console.log(salad.length);
}

//6. delete array
function deleteArray() {
    delete salad[2];
    display();
}

//7. concat
function concatArray(){
    let enoj = pushSalad.splice(0,3);
    pushSalad = pushSalad.splice(1,pushSalad.length-1);
    pushSalad.push(enoj);
    salad.concat(enoj);

    let text = `
    <h3>concat()</h3>
    <h3>${salad.toString()}</h3>
    <h3>+</h3>
    <h3>${pushSalad.slice(0,5).toString()}</h3>
    `
    main.innerHTML = text;
    display();
}

//8. splice
function spliceArray(){
    let text = `
    <h3>splice(1,3)</h3>
    <h3>${salad.splice(1,3).toString()}</h3>
    `
    main.innerHTML = text;
    display();
}

//9. slice
function sliceArray(){
    let text = `
    <h3>slice(1)</h3>
    <h3>${salad.slice(1).toString()}</h3>
    `
    main.innerHTML = text;
    display();
}

//10. sort
function sortArray(){
    salad.sort();
    let text = `
    <h3>sort()</h3>
    `
    main.innerHTML = text;
    display();
}