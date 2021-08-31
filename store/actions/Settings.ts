import { LAYOUT_TYPE, NAV_STYLE, SWITCH_LANGUAGE, WINDOW_WIDTH } from 'store/ActionTypes';

export function updateWindowWidth(width: number) {
    return (dispatch: any) => {
        dispatch({ type: WINDOW_WIDTH, width });
    };
}

export function onLayoutTypeChange(layoutType: any) {
    return (dispatch: any) => {
        dispatch({ type: LAYOUT_TYPE, layoutType });
    };
}

export function switchLanguage(locale: any) {
    return (dispatch: any) => {
        dispatch({
            type: SWITCH_LANGUAGE,
            payload: locale,
        });
    };
}
