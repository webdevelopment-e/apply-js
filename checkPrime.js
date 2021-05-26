// var n = 18;
// for(var i = 2; i < n - 1; i++){
//     // console.log(i, n/i);
//     console.log(i, n % i);
//     if(n % i == 0){
//         console.log('Not a prime number');
//         break;
//     }
// }


// var n = 79;
// for(var i = 2; i < n; i++){
//     // console.log(i, n/i);
//     // console.log(i, n % i);
//     if(n % i == 0){
//         console.log('Not a prime number');
//         break;
//     }
// }
// console.log('your number is a prime number');

// function isPrime(n){
//     for(var i = 2; i <= n; i++){
//         if(n % i == 0){
//             return('not a Prime Number');
//         }
//             return('your number is a Prime Number');
//     }
// }
// var result = isPrime(128);
// console.log(result);

// var n = 77;

// for(var i = 2; i < n; i++){
//     if(n % i == 0){
//         console.log('not a prime number');
        
//     }

// }

function isPrime(n){
    for(var i = 2; i < 10; i++){
        if(n % i == 0){
          return 'not a prime number';
        }
    }
    return 'your number is a prime number';
}

var result = isPrime(139);
console.log(result);

