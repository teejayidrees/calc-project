let equalPressed = 0;
let Allbuttons = document.querySelectorAll(".Allbuttons")

let erase = document.getElementById("erase")
let clear = document.getElementById("clear")
let input = document.getElementById("input")
let equal = document.getElementById("equal")

//access each class using foreach
Allbuttons.forEach((theButtons) => {
    theButtons.addEventListener("click", () => {
        if (equalPressed == 1) {
            input.value = "";
            equalPressed = 0;
        }
        //display value of each button
        input.value += theButtons.value;
    });
});
//solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equalPressed = 1;
    let inputValue = input.value;
    try{
        let solution = eval(inputValue);
        if(Number.isInteger(solution)){
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);//toFixed is used to approximate the digits after decimal place to 2 d.p. 
        }
    } catch (err){
        alert("Invalid Input")
    }
    return inputValue;
});
function storeResult(solution){
    localStorage.setItem('calcResult', solution)
};
function retrieveResult(){
    let storedResult = localStorage.getItem('calcResult');
    if (storedResult !== null){
        input = storedResult;
    }
}
clear.addEventListener("click", () => {
    input.value = "";
});
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length-1);// syntax is substr(start, length) if start is negative, itll start couting from the end of the string; other similar practices are slice , substring
});

window.onload = retrieveResult;
