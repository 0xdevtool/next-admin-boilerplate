import { combineReducers } from 'redux';

import Settings from './Settings';
import Common from './Common';
import Auth from './Auth';

const reducers = combineReducers({
    settings: Settings,
    common: Common,
    auth: Auth,
});

export default reducers;
