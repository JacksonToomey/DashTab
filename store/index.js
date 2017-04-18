import { createStore, combineReducers, applyMiddleware } from 'redux';

import tick from './middleware/tick';

import time from './state/time';
import workday from './state/workday';
import notes from './state/notes';


let reducer = combineReducers({
    time,
    workday,
    notes
})
export default createStore(
    reducer,
    applyMiddleware(tick)
)