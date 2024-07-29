// javascript object
var myEmployee = { name: 'ajay', gender: 'male', age: 23 };
console.log(myEmployee);
var myEmp1 = { name: 'vishal', gender: 'male', age: 22 };
console.log("employee details : ".concat(myEmp1.name, " ").concat(myEmp1.gender, " ").concat(myEmp1.age));
var result = { name: 'jayansh', gender: 'male' };
console.log("Employee3 Datails : ".concat(result.name, "  ").concat(result.gender));
var myEmp4 = {
    name: 'yatharth', gender: 'male', age: 23, role: 'employee',
    datails: function () { return "employee datails with role :\n    ".concat(myEmp4.name, "  ").concat(myEmp4.gender, "  ").concat(myEmp4.age, " ").concat(myEmp4.role); }
};
console.log(myEmp4.datails());
