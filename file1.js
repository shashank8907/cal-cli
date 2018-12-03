// //We make this file as to export a function
// //this file converts string to numbers and operators 
// //the function we export should it export readline?

// //The user exports cal-ci and calls string to it's function our function has read line and all 

var readLine = require('readline');
// //This is config file
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

var randFunRec = function () {
    //ist arg is string 2nd arg is functiomn
    rl.question("Enter your numbers and opertion to be performed on them eg: 2*2 \n", function (userInput) {
        //this function gets the user input
        console.log("User entered an input " + userInput);
        var numArr = userInput.split(/[\+]|[\*]|[\/]|[\-]/);
         var num1 = parseFloat(numArr[0]);
        var num2 = parseFloat(numArr[1]);

        var str = userInput.split(/[0-9]/);
        var strOperator = str.filter(function (e) {
            return e
        });
        // console.log(strOperator);
        switch (strOperator[0]) {
            case '*':
                console.log(num1 * num2);
                break;

            case '+':
                console.log(num1 + num2);
                break;
            case '-':
                console.log(num1 - num2);
                break;
            case '/':
                console.log(num1 / num2);
                break;
            default:
                console.log('Not a valid input');
                break;
        }
        randFunRec();
    });
}


module.exports.randFunRecExp = randFunRec;

