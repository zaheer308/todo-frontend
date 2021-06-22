import { StoreService } from '@/system/services';
import { Store } from 'vuex';
import { TokenHelper, GlobalConfig } from '@/system/config';
import { ICredential, IAccessToken, IUser, IPayload, PayloadMessageTypes, DefaultUser, ISignUp } from '@/system/models';
import Axios, { AxiosResponse } from 'axios';
import { IVerify } from '@/system/models/auth/icredencial';

export class AuthenticationService extends StoreService {

  constructor(store: Store<{}>) {
    super(store);
  }


  signup(credentials: ICredential) {
    return this.exec<any>(Axios.post(GlobalConfig.uri.auth + 'Register', credentials))
      .then(value => this.processPayload(value));
  }

  verifyEmail(credentials: IVerify) {
    return this.exec<any>(Axios.post(GlobalConfig.uri.auth + 'verifyEmail', credentials))
      .then(value => this.processPayload(value));
  }

  login(credentials: ICredential) {
    let onSuccess = (token: IAccessToken) => {
      if (token) {
        TokenHelper.setAccessToken(token.access_token);

        return TokenHelper.parseUserToken(token.access_token);
      }
    };

    return this.exec<IAccessToken>(Axios.post(GlobalConfig.uri.auth + 'login', credentials))
      .then(value => this.processPayload(value))
      .then(onSuccess);
  }

  logout() {

    let user: IUser = Object.assign({}, DefaultUser);

    TokenHelper.removeAccessToken();

    return user;

  }
}