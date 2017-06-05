import { combineReducers } from 'redux';
import authenticate from './authenticate';

const rootReducer = combineReducers({
    authenticated: authenticate
});

export default rootReducer;
