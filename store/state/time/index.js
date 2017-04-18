import State from './records';
import * as types from './types';

export default (state = new State(), action) => {
    switch(action.type) {
        case types.SET_TIME:
            return state.set('time', action.payload);
        default:
            return state;
    }
}