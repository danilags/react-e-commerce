import { combineReducers } from 'redux';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  userdata: userReducer
})

export default rootReducer;