import { assert } from 'chai';
import { setUserAuthData, logOut } from '../workerDataUser';
import { put } from 'redux-saga/effects';
import * as actions from '../../../actionCreators/userDataActionCreators';

describe('Testing setUserAuthData: ', () => {
  let payload:any;
  payload = {
    name: 'Avatar',
    avatar: 'Avatar',
  };
  const generator = setUserAuthData(payload);

  it('Testing setUserAuthData: should put setUserDataIntoStore', () => {
    const expected = put(actions.setUserDataIntoStore(payload));
    const actual = generator.next();
    assert.deepEqual(actual.value, expected);
  });
});

describe('Testing logOut: ', () => {
  const generator = logOut();
  it('Testing logOut: should put logOutStore', () => {
    const expected = put(actions.logOutStore());
    const actual = generator.next();
    assert.deepEqual(actual.value, expected);
  });
});
