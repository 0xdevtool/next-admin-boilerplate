const routeChangedHandler = (store: any) => (next: any) => (action: any) => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    const { pathname } = action.payload.location;
    const { settings } = store.getState();
  }

  next(action);
};

export default routeChangedHandler;
