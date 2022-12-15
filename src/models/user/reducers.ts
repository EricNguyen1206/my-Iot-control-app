import { UserModel } from './state';

export const userReducers = {
    logout: (state: UserModel) => {
        localStorage.removeItem('user');
        return {
            ...state,
            data: null,
        };
    },
    setUser: (state: UserModel, action: any) => {
        state.data = action.payload;
    },
};
