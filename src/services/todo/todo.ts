import { ITodo } from './../../models/Itodo';

/*
* author: H.Muhammad Kamran
* email: hmuhdkamran@gmail.com
* contact: +92(313 / 333) 9112 845
*/

import { StoreService } from '@/system/services';
import { Store } from 'vuex';
import Axios from 'axios';
import { GlobalConfig } from '@/system/config';
import { IParams } from '@/system/models/auth/icredencial';
// import { IBankAccounts } from '@/models';

const BASE_URL = GlobalConfig.uri.services + 'Todo/';

export class todoService extends StoreService {

    constructor(store: Store<{}>) {
        super(store);
    }

    public GetAll() {
        return this.exec<any>(Axios.get(BASE_URL + 'GetAll'))
            .then((value) => this.processPayload(value))
            .catch((error) => console.error(error));
    }


    public FindBy(params: string) {
        return this.exec<any>(Axios.post(BASE_URL + 'FindbyId', { paramstring: params}))
            .then((value) => this.processPayload(value))
            .catch((error) => console.error(error));
    }

    public Update(params: ITodo) {
        return this.exec<any>(Axios.post(BASE_URL + 'Update', params))
            .then((value) => this.processPayload(value))
            .catch((error) => console.error(error));
    }

    public DeleteById(params: string) {
        return this.exec<any>(Axios.post(BASE_URL + 'DeletebyId', { paramstring: params}))
            .then((value) => this.processPayload(value))
            .catch((error) => console.error(error));
    }

    public Insert(params: ITodo) {
        return this.exec<any>(Axios.post(BASE_URL + 'Insert', params))
            .then((value) => this.processPayload(value))
            .catch((error) => console.error(error));
    }

}
