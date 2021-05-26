// var fibo = [0, 1];
// // fibo[2] = fibo[2-1] + fibo[2-2];
// // fibo[3] = fibo[3-1] + fibo[3-2];
// // fibo[4] = fibo[4-1] + fibo[4-2];
// // fibo[5] = fibo[5-1] + fibo[5-2];
// // fibo[n] = fibo[n-1] + fibo[n-2];
// // fibo[i] = fibo[i-1] + fibo[i-2];

// for(var i = 2; i <= 10; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// //     console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
// // }
// console.log(fibo);


// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];
// fibo[7] = fibo[7-1] + fibo[7-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

// function fibonacci(n){
//     var fibo = [0,1];
//     for(var i = 2; i <= n; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     } 
//     return fibo;
// }
// var result = fibonacci(12);
// console.log(result);



// var fibo = [0, 1];
// fibo[2] = [2-1] + [2-2];
// fibo[3] = [3-1] + [3-2];
// fibo[4] = [4-1] + [4-2];
// fibo[n] = [n-1] + [n-2];
// fibo[i] = [i-1] + [i-2];

// for(var i = 2; i <= 10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
//     // console.log(fibo[i], fibo[i-1], fibo[i-2]);
// }
// console.log(fibo);

// function fibonacci(n){
//     var fibo = [0, 1]
//     for(var i = 2; i <= n; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// var result = fibonacci(12);
// console.log(result);

// function fibonacci(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }
//     else{
//         return fibonacci(n - 1)+(n - 2);
//     }
// }
// var result = fibonacci(12);
// console.log(result);

// 1, 1, 2, 3, 5, 8, 13, 21


// function fibonacciIterative(num) {
//     var fibo = [1, 1];
//     for (var i = 2; i <= num; i++) {
//         var nextFibo = fibo[i - 1] + fibo[i - 2];
//         fibo.push(nextFibo);
//     }
//     return fibo;
// }
// var result = fibonacciIterative(10);
// console.log(result);

function fibonacciRecursive(num){
    if(num == 0){
        return 1;
    }
    if(num == 1){
        return [1, 1];
    }
    var fibo = fibonacciRecursive(num - 1);
    var nextFibo = fibo[num-1] + fibo[num-2];
    fibo.push(nextFibo);
    return fibo;
}
var result = fibonacciRecursive(10);
console.log(result);
