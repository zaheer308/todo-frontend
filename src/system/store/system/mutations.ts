import { MutationTree } from 'vuex';
import { ICommonState } from './state';
import { IUser, DefaultUser, IStatusBarData } from '@/system/models';

export const Mutations: MutationTree<ICommonState> = {

    loading: (state: ICommonState, loading: boolean) => {
        state.isLoading = loading;
    },

 

    updateUser: (state: ICommonState, user: IUser) => {
        state.user = Object.assign({}, user || DefaultUser);
    },

 
};