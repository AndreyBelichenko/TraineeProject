import * as actions from '../actionTypes/userDataActionType';

export function setUserData(payload: object): actions.SetUserDataAuth {
  return {
    payload,
    type: actions.SET_USER_DATA_AUTH,
  };
}

export function setUserDataIntoStore(payload: object): actions.SetUserDataAuthStore {
  return {
    payload,
    type: actions.SET_USER_DATA_AUTH_STORE,
  };
}

export function logOut(): actions.Logout {
  return {
    type: actions.LOGOUT,
  };
}

export function logOutStore(): actions.LogoutStore {
  return {
    type: actions.LOGOUT_STORE,
  };
}
