// function printA() {
//     console.log(`Print A called`);
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// printA();
// function printB(A: any) {
//     console.log(`printB() function called : ${A}`);
// }
// printB(10);
// printB('Ajay');
// //2 function declaration anonymous function
// let printC = function () {
//     console.log(`printC() function called`);
// }
// printC();
// console.log(`Arrow Function`);
// // 3 arrow function
// let printD = () => {
//     console.log(`PrintD called`);
// }
// printD();
// //optional parameter
// function printE(name?: string) {
//     name = name || 'Ajay';
//     console.log(`PrintE() function called : ${name}`);
// }
// printE();
// printE('Ajju');
// rest parameter
console.log("rest parameter");
function PrintF() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    if (numbers.length > 0) {
        for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
            var num = numbers_1[_a];
            sum += num;
        }
        console.log("printF() sum of numbers : ".concat(sum));
    }
    else {
        console.log("PrintF() no numbers to add");
    }
}
PrintF(10, 20, 30);
PrintF();
// spread operator
var numbersA = [10, 20, 30];
var numbersB = __spreadArray(__spreadArray([], numbersA, true), [40, 50], false);
console.log("number of items in numbersB : ".concat(numbersB.length));
// default parameters
function printG(name) {
    if (name === void 0) { name = 'vihaan'; }
    console.log("printG() function called : ".concat(name));
}
printG('ajay');
printG();
