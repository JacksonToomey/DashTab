import { createStore, combineReducers, applyMiddleware } from 'redux';

import tick from './middleware/tick';
import wmata from './middleware/wmata';
import storage from './middleware/storage';

import time from './state/time';
import workday from './state/workday';
import transit from './state/transit';
import todos from './state/todos';


let reducer = combineReducers({
    time,
    workday,
    transit,
    todos,
})
export default createStore(
    reducer,
    applyMiddleware(tick, wmata, storage)
)