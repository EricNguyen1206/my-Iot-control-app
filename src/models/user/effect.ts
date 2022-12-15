import { call, put } from 'redux-saga/effects';
import { userAPI } from 'services';
import { AppResponse } from 'services/axiosClient';
import { User } from './state';

export function* login(action: any) {
    try {
        const { data }: AppResponse<User> = yield call(
            userAPI.login,
            action.payload
        );
        yield put({ type: 'user/setUser', payload: data });
    } catch (err) {
        return err;
    }
}
