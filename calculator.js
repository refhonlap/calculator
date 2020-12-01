const calcs = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b }
}

// const signs = ['+'];

// for (let i = 0; i < signs.length; i += 1) {
//     console.log(calcs[signs[i]](10, 20));
// }

function handleClick() {
    const keys = document.querySelectorAll('.btn-number');
    keys.forEach(key => {
        key.addEventListener('click', () => {
            writeOutput(event.target.dataset.value);
        })
    })
}

function writeOutput(value) {
    document.querySelector('input-field').value += value;
}

let calcString = '';
// calcString += '23+45.45-34';
const acceptableSigns = ['+', '-', '/', '*']
const nums = [];
const signs = [];

let num = '';
for (let i = 0; i < calcString.length; i += 1) {
    if (acceptableSigns.indexOf(calcString[i]) === -1) {
        num += calcString[i];
    }
    else {
        nums.push(parseFloat(num));
        num = '';
        signs.push(calcString[i])
    }
}
nums.push(parseFloat(num));
console.log(nums, signs);