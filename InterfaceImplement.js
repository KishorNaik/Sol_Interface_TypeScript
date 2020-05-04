var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.AddUser = function (userModel) {
        return true;
    };
    return UserRepository;
}());
var UserContext = /** @class */ (function () {
    function UserContext(userRepository) {
        this.userRepository = userRepository;
    }
    UserContext.prototype.AddUser = function (userModel) {
        var response = this.userRepository.AddUser(userModel);
        return response;
    };
    return UserContext;
}());
var UserController = /** @class */ (function () {
    function UserController(userContextObj) {
        this.userContextObj = userContextObj;
    }
    UserController.prototype.AddUser = function () {
        var userModelObj = new UserModel();
        userModelObj.firstName = "Kishor";
        userModelObj.lastName = "Naik";
        var response = this.userContextObj.AddUser(userModelObj);
        console.log(response);
    };
    return UserController;
}());
function UiMiddleware() {
    var userRepositoryObj = new UserRepository();
    var userContextObj = new UserContext(userRepositoryObj);
    var userControllerObl = new UserController(userContextObj);
    userControllerObl.AddUser();
}
UiMiddleware();
