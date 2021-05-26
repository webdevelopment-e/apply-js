// console.log(2022 / 4);

// const year = 3256;
// console.log(3256 % 4);
// console.log(3256 / 4);


// const year = 3566;
// console.log(3566 % 4);

// const year = 3566;
// const remainder = year % 4;
// // console.log(remainder);
// console.log(remainder == 0);

// const year = 3996;
// const remainder = year % 4;
// // console.log(remainder);
// console.log(remainder == 0);

// const year = 3998;
// let remainder = year % 4;
// if(remainder == 0){
//     console.log('your year is a leap year');
// }
// else{
//     console.log('your year is not a leap year');
// }


// function leapYear(year) {
//     const remainder = year % 4;
//     if(remainder == 0){
//        return true; 
//     }
//     else{
//         return false;
//     }
//     }

// const firstCheck = leapYear(2000);
// console.log(firstCheck);

console.log(2030/4);
console.log(2036/4);

const year = 3566;
let remainder = year % 4;
if(remainder == 0){
    console.log("year is a leap year");
}
else{
    console.log("not a leap year");
}


function isLeapYear(year){
    let remainder = year % 4;
    if(remainder == 0){
       return true;
    
    }
    else{
       return false;
    }
}

const result = isLeapYear(2088);
console.log(result);
