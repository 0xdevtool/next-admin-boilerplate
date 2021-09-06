/* eslint-disable */
import { AUTH_USER_INFO } from 'store/ActionTypes';

const routeChangedHandler = (store: any) => (next: any) => (action: any) => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        const { pathname } = action.payload;
        const { settings } = store.getState();
    }

    if (action.type === AUTH_USER_INFO) {
        if (action.userInfo != null) {
            window.location.href = '/';
        }
    }

    next(action);
};

export default routeChangedHandler;
