import {
  NAV_STYLE,
  NAV_STYLE_FIXED,
  TOGGLE_COLLAPSED_NAV,
  WINDOW_WIDTH,
} from 'store/ActionTypes';

let window: any;

const INIT_STATE = {
  navStyle: NAV_STYLE_FIXED,
  /* eslint-disable-next-line */
  width: window?.innerWidth,
  error: '',
  loading: false,
  message: '',
  navCollapsed: true,
  pathname: '/',
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
      case '@@router/LOCATION_CHANGE': {
          return {
              ...state,
              pathname: action.payload.location.pathname,
              navCollapsed: false,
          };
      }
      case WINDOW_WIDTH:
          return {
              ...state,
              width: action.width,
          };
      case TOGGLE_COLLAPSED_NAV: {
          return {
              ...state,
              navCollapsed: action.navCollapsed,
          };
      }
      case NAV_STYLE:
          return {
              ...state,
              navStyle: action.navStyle,
          };
      default:
          return state;
  }
};
