// function declaration
function welcome() {
    // function

    alert("we are proud to be here");
}

welcome();
// if statment 


var bestOption = '';
var userBudget = prompt('How much is your budget?');
console.log(userBudget);

if (userBudget <= 200 && userBudget > 0) { bestOption = 'The best options for you are oppo or Huawei'; }
else if (userBudget <= 400 && userBudget > 200) { bestOption = 'The best option for you is samsung'; }
else if (userBudget > 400) { bestOption = 'The best option for you is Iphone'; }
else { bestOption = 'check the site for more details about prices ' }

alert(bestOption);

document.write('remamer: ' + bestOption)
// finish if practice 

var userSystem = prompt('Do you want IOS or Android?');

while (userSystem !== 'IOS' && userSystem !== 'Android') {
    userSystem = prompt('please write only IOS or Android ');
}
// finish system type with selection option to continue

var NumberOfImage = prompt('how many Mobile do you want');

var image = '';
if (userSystem === 'IOS') {
    image = '<img src="ios.jpg" />';
} else if (userSystem === 'Android') {
    image = '<img src="android.jpg" />';
}

for (var i = 0; i < NumberOfImage; i++) {
    console.log(i);
    document.write(image);

}

