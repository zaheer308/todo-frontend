import { GlobalConfig } from '.';
import { IUser, DefaultUser, IJwtToken } from '../models';

import { default as jwtDecode } from "jwt-decode";
import { default as base64 } from "base-64";

import { mapKeys, pick } from './helper';

export class TokenHelper {
    public static getAccessToken(): string {
        return localStorage.getItem(GlobalConfig.auth.accessTokenKey);
    }

    public static setAccessToken(token: string): void {
        return localStorage.setItem(GlobalConfig.auth.accessTokenKey, token);
    }

    public static removeAccessToken(): void {
        return localStorage.removeItem(GlobalConfig.auth.accessTokenKey);
    }

    // public static getProvider(): ILoginProvider {
    //     let value = localStorage.getItem(GlobalConfig.auth.externalProviderKey);
    //     return value ? JSON.parse(base64.decode(value)) : null;
    // }

    // public static setProvider(provider: ILoginProvider): void {
    //     localStorage.setItem(
    //         GlobalConfig.auth.externalProviderKey,
    //         base64.encode(JSON.stringify(provider))
    //     );
    // }

    // public static removeProvider(): void {
    //     localStorage.removeItem(GlobalConfig.auth.externalProviderKey);
    // }

    public static parseUserToken(token: string): IUser {
        let user: IUser = Object.assign({}, DefaultUser);

        if (token) {
            let decodedToken: IJwtToken = jwtDecode(token);
            // const ns = GlobalConfig.claimsNamespace;

            if (!user.authenticated) user.authenticated = true;
            let name =
                decodedToken[
                "name"
                ];
          
            let sid =
                decodedToken[
                "userid"
                ];

                let verified =
                decodedToken[
                "verified"
                ];
      

           

           
            user.name  = name;
           
            user.exp = new Date(decodedToken.exp * 1000);
            user.userid = sid;
            user.verified = verified;
        }

        return user;
    }

    public static getBearerToken() {
        let token = localStorage.getItem(GlobalConfig.auth.accessTokenKey);

        return {
            Authorization: token
                ? "Bearer " + localStorage.getItem(GlobalConfig.auth.accessTokenKey)
                : null
        };
    }

    public static isTokenCurrent(value: string | IUser) {
        let user: IUser = null;

        if (typeof value === "string") {
            user = TokenHelper.parseUserToken(value);
        } else {
            user = value;
        }

        if (!user) return null;
        else return user.exp && user.exp > new Date();
    }
}
