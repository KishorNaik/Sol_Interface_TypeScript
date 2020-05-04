class UserModel {
    public firstName: string;
    public lastName: string;
}

interface IUserRepository {
    AddUser(userModel: UserModel): boolean
}

class UserRepository implements IUserRepository {


    AddUser(userModel: UserModel): boolean {
        return true;
    }
}

interface IUserContext {
    AddUser(userModel: UserModel): boolean;
}

class UserContext implements IUserContext {

    constructor(private userRepository: IUserRepository) {
    }

    AddUser(userModel: UserModel): boolean {

        let response = this.userRepository.AddUser(userModel);
        return response;
    }

}

class UserController {
    constructor(private userContextObj: IUserContext) { }

    public AddUser(): void {

        let userModelObj: UserModel = new UserModel();
        userModelObj.firstName = "Kishor";
        userModelObj.lastName = "Naik"

        let response = this.userContextObj.AddUser(userModelObj);
        console.log(response);

    }
}


function UiMiddleware(): void {

    let userRepositoryObj: IUserRepository = new UserRepository();

    let userContextObj: IUserContext = new UserContext(userRepositoryObj);

    let userControllerObj: UserController = new UserController(userContextObj);
    userControllerObj.AddUser();
}

UiMiddleware();
