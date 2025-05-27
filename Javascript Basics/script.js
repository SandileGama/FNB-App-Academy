//Variable file
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

//Password file
// var userInputPassword = '017';
// var actualPassword = '007';

// if (userInputPassword == actualPassword) {
//     document.getElementById('output').innerHTML = ('Password Correct');
// } else {
//     document.getElementById('output').innerHTML = ('Password Incorrect');
// }

//Functions file
var head = document.getElementById('heading2');
function changeText() {
    if (head.innerHTML == 'Javascript') {
        head.innerHTML = ('Javascript is Awesome');
    } else {
        head.innerHTML = ('Javascript');
    }
}