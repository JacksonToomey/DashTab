import { List, fromJS } from 'immutable';
import * as types from './types';

export default (state = new List(), action) => {
    switch(action.type) {
        case types.SET_TRAIN_TIMES:
            return fromJS(action.payload);
        default:
            return state;
    }
}