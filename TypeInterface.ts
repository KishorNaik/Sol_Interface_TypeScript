interface IUser {
    firstName: String,
    lastName: String,
    display(): void
}

let userObj: IUser =
{
    firstName: "Kishor",
    lastName: "Naik",
    display() {
        console.log(this.firstName);
        console.log(this.lastName);
    }
};
console.log(userObj.firstName);
console.log(userObj.lastName);
userObj.display();
