// javascript object

let myEmployee = { name: 'ajay', gender: 'male', age: 23 };
console.log(myEmployee);


//typescript using type alias
type MyEmployee = { name: string, gender: string, age: number };
let myEmp1: MyEmployee = { name: 'vishal', gender: 'male', age: 22 };
console.log(`employee details : ${myEmp1.name} ${myEmp1.gender} ${myEmp1.age}`);



//Using Interfaces
interface IEmployee {
    readonly name: string;
    gender: string;
    age?: number;
}

let result: IEmployee = { name: 'jayansh', gender: 'male' };
console.log(`Employee3 Datails : ${result.name}  ${result.gender}`);



// extending interface
// interface can have functions declarations

interface IEmployeeRole extends IEmployee{
    role : string;
    datails():void;
}

let myEmp4 : IEmployeeRole =
{
    name : 'yatharth', gender : 'male', age :23, role:'employee',
    datails :()=> `employee datails with role :
    ${myEmp4.name}  ${myEmp4.gender}  ${myEmp4.age} ${myEmp4.role}`
}

console.log(myEmp4.datails());










