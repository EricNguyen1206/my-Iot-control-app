import { User } from 'models/user/state';
import axiosClient, { AppResponse } from './axiosClient';

export const userAPI = {
    async login(account: User) {
        const url = '/user/login';
        const res:AppResponse<User> = await axiosClient.post(url, account);
        return res;
    },
};
