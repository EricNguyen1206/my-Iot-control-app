import { all } from 'redux-saga/effects';

function* helloSaga() {
    yield console.log('Hello saga');
}
export default function* rootSaga() {
    yield console.log('rootSaga is running!');
    yield all([helloSaga()]);
}
