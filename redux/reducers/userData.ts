import * as actionTypes from '../actionTypes/userDataActionType';
import * as Cookies from 'js-cookie';

const userDataCookie = Cookies.get('userData');
export type UserDataType = {
  name: string,
  avatar: string,
  email: string,
};

export type InitialStateType = {
  userData: UserDataType | {};
};

const initialState: InitialStateType = {
  userData: {
    name: typeof userDataCookie === 'string' ? JSON.parse(userDataCookie).name : '',
    avatar: typeof userDataCookie === 'string' ? JSON.parse(userDataCookie).avatar : '',
  },
};

export default function userDataReducer(
    state: InitialStateType = initialState,
    action: any,
): InitialStateType {
  console.log();
  switch (action.type) {
    case 'Hello': return { userData: { name: 'Andrey' } };
    case actionTypes.SET_USER_DATA_AUTH_STORE: return { userData: action.payload.payload };
    case actionTypes.LOGOUT_STORE: return { userData: { name: '', avatar: '' } };
    default:
      return state;
  }
}
