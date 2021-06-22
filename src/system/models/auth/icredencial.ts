
export interface ICredential {
    username: string;
    password: string;
};
export interface ISignUp {
    username: string;
    password: string;
    confirmPassword: string;
    displayName: string;
    language: string;
}

export interface IParams {
    paramstring: string;
}

export interface IVerify {
    username: string;
    verification: number;
}