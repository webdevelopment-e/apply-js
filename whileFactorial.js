// var i = 1;
// var factorial = 1;
// while(i <= 10){
//     factorial = factorial * i;
//     // console.log(factorial, i);
//     i++;
// }
// console.log(factorial);

// var i = 1;
// var factorial = 1;
// while(i <= 12){
//     factorial = factorial * i;
//     i++;
// }

// console.log(factorial);

// function factorial(n){
//     var i = 1;
//     var fact = 1;
//     while(i <= n){
//         fact = fact * i;
//         i++;
// }
//  return fact;
// }

// // var result = factorial(5);
// // console.log(result);
// var result = factorial(15);
// console.log(result);

var i = 1;
var factorial = 1;
while (i <= 10) {
    factorial = factorial * i;
    console.log(factorial, i);
    i++;
}


function factorial(n) {
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
    }
var result = factorial(10);
console.log(result);