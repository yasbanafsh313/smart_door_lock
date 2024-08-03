export interface User {
    id: number;
    fullName: string;
    password: string;
    email: string;
    phoneNumber: string;
    codeMeli: string;
}
export interface UserLoginCredential{

    codeMeli: string;
    password: string;
}