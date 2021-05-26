// 3! = 1*2*3
// 8! = 1*2*3*4*5*6*7*8
// 12! =1*2*3*4*5*6*7*8*9*10*11*12


// var factorial = 1;
// for (var i = 1; i <= 10; i++) {
//     factorial = factorial * i;
//     console.log( i, factorial);
// }

// var factorial = 1;
// for(i = 1; i <= 50; i++){
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

// function factorial(n){
//     var factorial = 1;
//     for(var i = 1; i <= n; i++){
//         factorial = factorial * i;
//     }
//      return factorial;
// }

// // var result = factorial(12);
// // console.log(result);
// var result = factorial(6);
// console.log(result);

// 5! = 1*2*3*4*5;
// 10! = 1*2*3*4*5*6*7*8*9*10;


// var factorial = 1;
// for(var i = 1; i <= 5; i++){
//     factorial = factorial*i;
//     console.log(factorial, i);
// }

function factorial(n){
    var factorial = 1;
    for(var i = 1; i <= 10; i++){
        factorial = factorial*i;

}
    return factorial;
}

var result = factorial(10);
console.log(result);
