const calcs = {
    '+': function(a,b) { return a + b },
    '-': function(a,b) { return a - b },
    '÷': function(a,b) { return a / b },
    'x': function(a,b) { return a * b }
}

let calcInput = '';
calcInput += document.getElementsByTagName("INPUT");
const validSigns = ['+', '-', '÷', 'x'];
const nums = [];
const signs = [];


function fillInput() {
    // document.getElementsByTagName("INPUT")[0].setAttribute("value", "próba");
}

function clearInput() {
    document.getElementsByTagName("INPUT")[0].setAttribute("value", "");
}

for (let i = 0; i < signs.length; i += 1) {
    console.log(calcs[signs[i]](10, 20));
}