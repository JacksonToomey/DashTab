import State, { Note } from './records';
import * as types from './types';

export default (state = new State(), action) => {
    switch(action.type) {
        case types.ADD_NOTE:
            return state.withMutations(s => {
                return s.update('notes', nts => nts.push(action.payload));
            });
        case types.UPDATE_NOTE:
            return state.withMutations(s => {
                return s.updateIn(['notes', action.payload.index], n => {
                    if(n) {
                        return n.set('content', action.payload.text)
                    }
                    return n;
                })
            })
        default:
            return state;
    }
}