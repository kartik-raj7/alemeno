import { combineReducers } from 'redux';
import userReducer from './userReducer';
import courseReducer from './coursesReducer';

const rootReducer = combineReducers({
    user:userReducer,
    course:courseReducer,
});

export default rootReducer;