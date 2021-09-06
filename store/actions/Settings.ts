import { LAYOUT_TYPE, SWITCH_LANGUAGE } from '../ActionTypes';

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
