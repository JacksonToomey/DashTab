import { createStore, combineReducers, applyMiddleware } from 'redux';

import tick from './middleware/tick';

import time from './state/time';
import workday from './state/workday';


let reducer = combineReducers({
    time,
    workday
})
export default createStore(
    reducer,
    applyMiddleware(tick)
)