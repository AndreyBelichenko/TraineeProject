import * as actions from '../userDataActionCreators';
import { assert } from 'chai';

describe('testing actions userDataActionCreators', () => {
  let props:any;
  it('setUserData action', () => {
    props = {
      name: 'Avatar',
      avatar: 'avatar',
    };
    const expectedActionCreator = { type: 'SET_USER_DATA_AUTH', payload: props };
    const actualActionCreator = actions.setUserData(props);
    assert.deepEqual(actualActionCreator, expectedActionCreator);
  });

  it('setUserDataIntoStore action', () => {
    props = {
      name: 'Avatar',
      avatar: 'avatar',
    };
    const expectedActionCreator = { type: 'SET_USER_DATA_AUTH_STORE', payload: props };
    const actualActionCreator = actions.setUserDataIntoStore(props);
    assert.deepEqual(actualActionCreator, expectedActionCreator);
  });

  it('logOut action', () => {
    const expectedActionCreator = { type: 'LOGOUT' };
    const actualActionCreator = actions.logOut();
    assert.deepEqual(actualActionCreator, expectedActionCreator);
  });

  it('logOutStore action', () => {
    const expectedActionCreator = { type: 'LOGOUT_STORE' };
    const actualActionCreator = actions.logOutStore();
    assert.deepEqual(actualActionCreator, expectedActionCreator);
  });
});
