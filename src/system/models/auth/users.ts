
export interface IUser {
    authenticated: boolean;
    name?: string;
    exp?: Date;
    userid?: number;
    jti?: string;
    verified?: number;
};