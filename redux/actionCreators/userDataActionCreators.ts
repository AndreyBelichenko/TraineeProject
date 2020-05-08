import * as actions from "../actionTypes/userDataActionType";

export function setUserData(payload: object): actions.setUserDataAuth {
    return {
        type: actions.SET_USER_DATA_AUTH,
        payload: payload,
    };
}

export function setUserDataIntoStore(payload: object): actions.setUserDataAuthStore {
    return {
        type: actions.SET_USER_DATA_AUTH_STORE,
        payload: payload,
    };
}