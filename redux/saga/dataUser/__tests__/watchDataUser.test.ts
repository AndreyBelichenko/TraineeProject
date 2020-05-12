import watchDataUser from '../watchDataUser';
import { assert } from 'chai';
import * as actionTypes from '../../../actionTypes/userDataActionType';
import * as workers from '../workerDataUser';
import { takeEvery } from 'redux-saga/effects';

describe('Testing watchDataUser: ', () => {
  const generator = watchDataUser();
  it('watchDataUser takeEvery SET_USER_DATA_AUTH', () => {
    const actual = generator.next();
    assert.deepEqual(
            actual.value,
            takeEvery(actionTypes.SET_USER_DATA_AUTH, workers.setUserAuthData),
        );
  });

  it('watchDataUser takeEvery LOGOUT', () => {
    const actual = generator.next();
    assert.deepEqual(
            actual.value,
            takeEvery(actionTypes.LOGOUT, workers.logOut),
        );
  });

  it('watchDataUser done equals to true', () => {
    const actual = generator.next();
    assert.isTrue(actual.done);
  });
});
