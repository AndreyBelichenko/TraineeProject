export const SET_LYRICS = "lyricsActionTypes/SET_LYRICS";
export interface SetLyricsAction {
    type: typeof SET_LYRICS;
    lyrics: string;
}

export const SET_USER_DATA_AUTH= "SET_USER_DATA_AUTH";
export interface setUserDataAuth {
    type: typeof SET_USER_DATA_AUTH,
    payload: object,
}

export const SET_USER_DATA_AUTH_STORE= "SET_USER_DATA_AUTH_STORE";
export interface setUserDataAuthStore {
    type: typeof SET_USER_DATA_AUTH_STORE,
    payload: object,
}

export type userDataAllActionType =
    | SetLyricsAction
    | setUserDataAuth
    | setUserDataAuthStore;