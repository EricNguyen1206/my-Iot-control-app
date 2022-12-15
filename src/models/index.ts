export interface Model<T> {
    data: T | null;
    isFetching: boolean;
    error: boolean;
}