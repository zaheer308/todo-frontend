import { Module } from 'vuex';
import { ICommonState } from './state';
import { DefaultUser } from '@/system/models';
import { Mutations } from './mutations';
import { Actions } from './actions';

export const CommonModule: Module<ICommonState, {}> = {
    state: {
        isLoading: false,
        user: Object.assign({}, DefaultUser)
     
    },
    mutations: Mutations,
    actions: Actions
};
