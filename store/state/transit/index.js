import { fromJS } from 'immutable';
import * as types from './types';

export default (state = fromJS({}), action) => {
    switch(action.type) {
        default:
            return state;
    }
}