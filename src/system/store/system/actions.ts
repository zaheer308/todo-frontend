import { ActionTree, ActionContext } from 'vuex';
import { ICommonState } from './state';
import { TokenHelper } from '@/system/config';
import { IStatusBarData, IPayloadMessage, StoreTypes, IUser, PayloadMessageTypes } from '@/system/models';


export const Actions: ActionTree<ICommonState, any> = {

    loading: (injectee: ActionContext<ICommonState, any>, loading: boolean) => {

        injectee.commit(StoreTypes.loadingState, loading);
    },


    updateUser: (injectee: ActionContext<ICommonState, any>, userData: string | IUser) => {

        let payload: IUser = null;

        if (typeof userData === 'string')
            payload = TokenHelper.parseUserToken(userData);
        else
            payload = userData

        injectee.commit(StoreTypes.updateUser, payload);
    },

   
};