export class User{
    userName: string;
    email: string;
    password: string;

    constructor(username, email, password){
        this.userName = username;
        this.email = email;
        this.password = password;
    }
}