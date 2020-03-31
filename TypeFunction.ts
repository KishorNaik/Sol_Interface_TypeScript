// Type Function

type typeDemo = (firstName: string, lastName: string) => string;

let typeDemoObj: typeDemo = function (firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
}

let fullName = typeDemoObj("Kishor", "Naik");
console.log(fullName);

// Interface Function
interface IUsers {
    (firstName: string, lastName: string): string
}

let funcUsers: IUsers = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`;
}

console.log(funcUsers("KISHOR", "Naik"));