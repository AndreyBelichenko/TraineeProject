import { put } from 'redux-saga/effects';
import * as actions from '../../actionCreators/userDataActionCreators';

export function* setUserAuthData(payload: object) {
  yield put(actions.setUserDataIntoStore(payload));
}

export function* logOut() {
  yield put(actions.logOutStore());
}
