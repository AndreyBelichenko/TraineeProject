export const SET_USER_DATA_AUTH = 'SET_USER_DATA_AUTH';
export interface SetUserDataAuth {
  type: typeof SET_USER_DATA_AUTH;
  payload: object;
}

export const SET_USER_DATA_AUTH_STORE = 'SET_USER_DATA_AUTH_STORE';
export interface SetUserDataAuthStore {
  type: typeof SET_USER_DATA_AUTH_STORE;
  payload: object;
}

export const LOGOUT = 'LOGOUT';
export interface Logout {
  type: typeof LOGOUT;
}

export const LOGOUT_STORE = 'LOGOUT_STORE';
export interface LogoutStore {
  type: typeof LOGOUT_STORE;
}

export type userDataAllActionType =
    | SetUserDataAuth
    | SetUserDataAuthStore
    | Logout
    | LogoutStore;
