import { Model } from "models";

export interface User {
    username: string;
    password: string;
}

export interface UserModel extends Model<User> {}

export const initState:UserModel = {
    data: null,
    isFetching: false,
    error: false,
};
