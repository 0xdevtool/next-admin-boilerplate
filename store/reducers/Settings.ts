import {
    LAYOUT_TYPE,
    LAYOUT_TYPE_FULL,
    NAV_STYLE,
    NAV_STYLE_FIXED,
    SWITCH_LANGUAGE,
    THEME_COLOR,
    THEME_TYPE,
    THEME_TYPE_SEMI_DARK,
    WINDOW_WIDTH,
} from 'store/ActionTypes';

let window: any;

const initialSettings = {
    navStyle: NAV_STYLE_FIXED,
    layoutType: LAYOUT_TYPE_FULL,
    themeType: THEME_TYPE_SEMI_DARK,
    themeColor: THEME_COLOR,

    width: window?.innerWidth,
    isDirectionRTL: false,
    locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us',
    },
};

const settings = (state = initialSettings, action: any) => {
    switch (action.type) {
        case WINDOW_WIDTH:
            return {
                ...state,
                width: action.width,
            };
        case THEME_TYPE:
            return {
                ...state,
                themeType: action.themeType,
            };
        case THEME_COLOR:
            return {
                ...state,
                themeColor: action.themeColor,
            };

        case NAV_STYLE:
            return {
                ...state,
                navStyle: action.navStyle,
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
