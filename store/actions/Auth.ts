import { clearSavedToken, saveTokens } from 'libs/helpers';
import { AUTH_USER_INFO } from 'store/ActionTypes';

export function updateAuthUserInfo(payload: any) {
    const { user: userInfo, accessToken } = payload;
    return (dispatch: any) => {
        dispatch({ type: AUTH_USER_INFO, userInfo });
        // eslint-disable-next-line no-undef
        localStorage.setItem(AUTH_USER_INFO, JSON.stringify(userInfo));
        saveTokens(accessToken);
    };
}

export function logOut() {
    return (dispatch: any) => {
        dispatch({ type: AUTH_USER_INFO, userInfo: null });
        // eslint-disable-next-line no-undef
        localStorage.removeItem(AUTH_USER_INFO);
        clearSavedToken();
    };
}

export function loadStorageAuthUserInfo() {
    // eslint-disable-next-line no-undef
    let userInfo = localStorage.getItem(AUTH_USER_INFO);

    if (userInfo != null) {
        userInfo = JSON.parse(userInfo);
    }

    return userInfo;
}
