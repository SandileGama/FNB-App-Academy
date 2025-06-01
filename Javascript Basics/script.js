//VARIABLE FILES
// var text1;
// var text2;
// var text2;

// var numA = 5;
// var numB = 10;

// text1 = 'Hello everyone on the planet!';
// text2 = 'Im learning javascript'
// text3 = 'This is awesome'

// document.getElementById('heading1').innerHTML = (text1);
// document.getElementById('paragraph1').innerHTML = (text2 + ' ' + text3);
// document.getElementById('paragraph2').innerHTML = (numA + ' x ' + numB + ' = ' + numA * numB);

//PASSWORD FILES
// var userInputPassword = '017';
// var actualPassword = '007';

// if (userInputPassword == actualPassword) {
//     document.getElementById('output').innerHTML = ('Password Correct');
// } else {
//     document.getElementById('output').innerHTML = ('Password Incorrect');
// }

//FUNCTION FILES
// var head = document.getElementById('heading2');
// function changeText() {
//     if (head.innerHTML == 'Javascript') {
//         head.innerHTML = ('Javascript is Awesome');
//     } else {
//         head.innerHTML = ('Javascript');
//     }
// }

// var paragraph = document.getElementById('addition');
// var paragraph2 = document.getElementById('outputText');

// paragraph.innerHTML = addNumbers(10, 6);
// paragraph2.innerHTML = someFunction();

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// function someFunction() {
//     var someVar = 100;
//     return someVar;
// }

// Login form mini project
// function verifyUser() {
//     var username = document.getElementById('usernameInput').value;
//     var password = document.getElementById('passwordInput').value;

//     checkCredentials(username, password);
// }

// function checkCredentials(username, password) {
//     var sysUsername = "Sandz";
//     var sysPassword = "007";

//     if (username == sysUsername && password == sysPassword) {
//         document.getElementById('message').innerHTML = ('correct! Logging you in...');
//     } else {
//         document.getElementById('message').innerHTML = ('Incorrect! Please Try Again');
//     }
// }

// function btnPressed() {
//     var weatherSelected = document.getElementById('weather').value;
//     var advice;

//     switch (weatherSelected) {
//         case "sunny":
//             advice = 'Wear your sunglasses!';
//             break;
//         case "rainy":
//             advice = 'Wear a raincoat and bring and umbrella';
//             break;
//         case "windy":
//             advice = 'Wear a jacket';
//             break;
//         case "snowy":
//             advice = 'Dress warmly';
//             break;
//         case "cloudy":
//             advice = 'Carry a jacket, might rain';
//             break;
//     }
//     document.getElementById('outputText').innerHTML = ('Weather advice:' + advice);
// }

//STRINGS AND NUMBERS FILE
output = document.getElementById('outputText');
var text1 = 'seven';
var text2 = '5';

var num1 = stringToNumber(text1);
var num2 = stringToNumber(text2);

if (isNaN(num1) || isNaN(num2)) {
    output.innerHTML = 'No valid number entered!';
} else {
    output.innerHTML = num1 + num2;
}

function stringToNumber(text) {
    return parseInt(text);
}