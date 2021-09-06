import { AUTH_USER_INFO } from 'store/ActionTypes';

const INIT_STATE = {
    user: null,
    accessToken: null,
};

export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case AUTH_USER_INFO: {
            return {
                ...state,
                user: action.payload,
            };
        }

        default:
            return state;
    }
};
