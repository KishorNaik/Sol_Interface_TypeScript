interface IPerson {
    firstName: string,
    lastName: string
}

interface IEmployee extends IPerson {
    employeeCode: string
}

interface ICustomer extends IPerson {
    customerCode: string
}

let employeeObj: IEmployee = {
    firstName: "Kishor",
    lastName: "Naik",
    employeeCode: "011"
};

console.log(employeeObj.employeeCode);

let customerObj: ICustomer = {
    firstName: "Kishor",
    lastName: "Naik",
    customerCode: "012"
};

console.log(customerObj.customerCode);