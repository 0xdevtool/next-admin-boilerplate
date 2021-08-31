import { NAV_STYLE, TOGGLE_COLLAPSED_NAV } from 'store/ActionTypes';

export function toggleNavStyleChange(navStyle: any) {
  return (dispatch: any) => {
    dispatch({ type: NAV_STYLE, navStyle });
  };
}

export function toggleCollapsedSideNav(navCollapsed: boolean) {
  return (dispatch: any) => {
    dispatch({ type: TOGGLE_COLLAPSED_NAV, navCollapsed });
  };
}
