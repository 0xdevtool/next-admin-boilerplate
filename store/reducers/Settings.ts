import {
    LAYOUT_TYPE,
    LAYOUT_TYPE_FULL,
    SWITCH_LANGUAGE,
    THEME_TYPE,
    THEME_TYPE_SEMI_DARK,
} from '../ActionTypes';

const initialSettings = {
    layoutType: LAYOUT_TYPE_FULL,
    themeType: THEME_TYPE_SEMI_DARK,
    locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us',
    },
};

const settings = (state = initialSettings, action: any) => {
    switch (action.type) {
        case THEME_TYPE:
            return {
                ...state,
                themeType: action.themeType,
            };
        case LAYOUT_TYPE:
            return {
                ...state,
                layoutType: action.layoutType,
            };

        case SWITCH_LANGUAGE:
            return {
                ...state,
                locale: action.payload,
            };
        default:
            return state;
    }
};

export default settings;
