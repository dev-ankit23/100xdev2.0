"use strict";
// Gretting Fucntion
// function greeting(firstname: string) {
//   console.log(`Hello ${firstname}`);
// }
// greeting("Ankit");
// function SumTwoValue(a: number, b: number) {
//   return a + b;
// }
// console.log(SumTwoValue(23, 34));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(34));
