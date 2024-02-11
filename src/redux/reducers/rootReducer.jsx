import { combineReducers } from 'redux';
import userReducer from './userReducer';
import courseReducer from './coursesReducer';
import mycoursesReducer from './mycoursesReducer';

const rootReducer = combineReducers({
    user:userReducer,
    course:courseReducer,
    mycourse:mycoursesReducer,
});

export default rootReducer;