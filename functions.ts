// function printA() {
//     console.log(`Print A called`);
// }

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
console.log(`rest parameter`);
function PrintF(...numbers: number[]) {
    let sum = 0;
    if (numbers.length > 0) {
        for (let num of numbers) {
            sum += num;
        }
        console.log(`printF() sum of numbers : ${sum}`);
    } else {
        console.log(`PrintF() no numbers to add`);

    }
}

PrintF(10,20,30);
PrintF();

// spread operator
let numbersA: number[] = [10, 20, 30];
let numbersB: number[] = [...numbersA, 40, 50];

console.log(`number of items in numbersB : ${numbersB.length}`);

// default parameters

function printG(name: string = 'vihaan') {
    console.log(`printG() function called : ${name}`);
}

printG('ajay');
printG();