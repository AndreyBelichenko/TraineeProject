import { all, fork } from 'redux-saga/effects';
import watchDataUser from './dataUser/watchDataUser';

const sagas = [
  watchDataUser,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
