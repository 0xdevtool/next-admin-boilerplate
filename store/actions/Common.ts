import {
  NAV_STYLE,
  TOGGLE_COLLAPSED_NAV,
  WINDOW_WIDTH,
} from 'store/ActionTypes';

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

export function updateWindowWidth(width: number) {
  return (dispatch: any) => {
      dispatch({ type: WINDOW_WIDTH, width });
  };
}
