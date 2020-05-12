import { takeEvery } from 'redux-saga/effects';
import * as workers from './workerDataUser';
import * as actionTypes from '../../actionTypes/userDataActionType';

export default function* watchDataUser() {
  yield takeEvery(actionTypes.SET_USER_DATA_AUTH, workers.setUserAuthData);
  yield takeEvery(actionTypes.LOGOUT, workers.logOut);
}
