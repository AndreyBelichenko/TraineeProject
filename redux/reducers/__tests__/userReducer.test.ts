import userDataReducer from '../userData';
import * as actions from '../../actionCreators/userDataActionCreators';
import { assert } from 'chai';

describe('testing userDataReducer', () => {
  const initialState = {
    userData: {
      name: '',
      avatar: '',
    },
  };
  let props:any;
  it('testing userDataReducer with action {payload, type: actions.SET_USER_DATA_AUTH_STORE }',
        () => {
          props = { payload: { name: 'Avatar', avatar: 'Avatar' } };
          const expectedResult = {
            userData: {
              name: 'Avatar',
              avatar: 'Avatar',
            },
          };
          const result = userDataReducer(initialState, actions.setUserDataIntoStore(props));
          assert.deepEqual(result, expectedResult);
        });

  it('testing userDataReducer with action {type: actions.LOGOUT_STORE }', () => {
    const expectedResult = {
      userData: {
        name: '',
        avatar: '',
      },
    };
    const result = userDataReducer(initialState, actions.logOutStore());
    assert.deepEqual(result, expectedResult);
  });
});
