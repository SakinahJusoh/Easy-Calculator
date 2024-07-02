// Function to navigate to easy-calculator.html
function gotoCalculator() {
    window.location.href = 'easy calculator.html';
}

// Function to navigate to exchange-rate.html
function gotoExchangeRate() {
    window.location.href = 'exchange rate.html';
}

// Function to navigate to more.html
function gotoMore() {
    window.location.href = 'more.html';
}

// Function that display value 
function dis(val) {
    document.getElementById("result").value += val;
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

// Function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}

// Function that clear the display 
function clr() {
    document.getElementById("result").value = "";
}
function bck() {
    let value = document.getElementById('result').value;
    document.getElementById('result').value = value.slice(0, -1);
}
// Inside event callback

if (symbol == '=') {

    const historyElements = JSON.parse(localStorage.getItem(STORAGE_NAME))
    if (!historyElements.includes(inputEl.value)) {
        historyElements.push(inputEl.value)
    }
    localStorage.setItem(STORAGE_NAME, JSON.stringify(historyElements))
    

    inputEl.value = output.value
    refreshHistory()
}
else if (symbol == 'DEL') {
    inputEl.value = inputEl.value.slice(0, inputEl.value.length - 1)
} else if (symbol == 'CLEAR') {
    inputEl.value = ''
} else {
    inputEl.value += symbol;
}

registrateChange()
