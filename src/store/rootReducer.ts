import {combineReducers} from 'redux'

import eventReducer from './events/reducer'
import photoReducer from './photos/reducer'

export default combineReducers({
    eventReducer,
    photoReducer
});