interface IUsers {
    fullName: string,
    age?: number,
    readonly salary: number
}

let userObj: IUsers = {
    fullName: "Kishor Naik",
    //age:35, // Optional Property
    salary: 1
};

console.log(userObj.fullName);
console.log(userObj.age);
console.log(userObj.salary);

//userObj.salary = 10; // Cannot assign value in salary property because it is readonly.

