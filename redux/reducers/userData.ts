// import * as actions from "../actionTypes/lyricsActionTypes";
import * as actionTypes from '../actionTypes/userDataActionType';

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
    name: '',
    avatar: '',
  },
};

export default function userDataReducer(
    state: InitialStateType = initialState,
    action: any,
): InitialStateType {
  switch (action.type) {
    case 'Hello': return { userData: { name: 'Andrey' } };
    case actionTypes.SET_USER_DATA_AUTH_STORE: return { userData: action.payload.payload}
    default:
      return state;
  }
}
