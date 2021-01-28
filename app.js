var bestOption = '';
var userBudget = prompt('How much is your bidget?');
console.log(userBudget);
if (userBudget < 200) { bestOption = 'oppo and Huawei'; }
else if (userBudget < 400) { bestOption = 'samsung'; }
else if (userBudget < 400) { bestOption = 'Iphone'; }
alert('Best Opthion' + bestOption);


var userSystem = prompt('Do you want IOS or Android?');

while (userSystem !== 'IOS' && order !== 'Android') {
    userSystem = prompt('please write only IOS or Android ');
}
var NumberOfImage = prompt('how many Mobile do you want');

var image = '';
if (userSystem === 'IOS') {
    image = '<img src="ios.jpg" />';
} else if (userSystem === 'Android') {
    image = '<img src="android.jpg" />';
}

for (var i = 0; i < NumberOfImage ; i++) {
    console.log(i);
    document.write(image);

}