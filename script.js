let input = document.getElementById('input');


function zero() {
    input.value = '0';
}

function one() {
    input.value += '1';

}
function two() {
    input.value += '2';
}
function three() {
    input.value += '3';
}
function four() {
    input.value += '4';
}
function five() {
    input.value += '5';
}
function six() {
    input.value += '6';
}
function seven() {
    input.value += '7';
}
function eight() {
    input.value += '8';
}
function nine() {
    input.value += '9';
}
function add() {
    input.value += '+';
}
function minus() {
    input.value += '-';
}
function multiply() {
    input.value += '*';
}
function dot() {
    input.value += '.';
}
function divide() {
    input.value += '/';
}
function reset() {
    input.value = ''
    
}
function equal() {
    let solution = eval(input.value);
    // alert(solution);

    input.value = solution;
}
function raise() {
    input.value += '**'
}
function root() {
    input.value = Math.sqrt(input.value)
}

