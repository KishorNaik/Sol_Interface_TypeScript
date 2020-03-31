var userObj = {
    firstName: "Kishor",
    lastName: "Naik",
    display: function () {
        console.log(this.firstName);
        console.log(this.lastName);
    }
};
console.log(userObj.firstName);
console.log(userObj.lastName);
userObj.display();
