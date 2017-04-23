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
        case types.DELETE_NOTE:
            let newState = state.withMutations(s => {
                return s.update('notes', n => n.delete(action.payload));
            });
            if (newState.get('notes').size == 0) {
                return new State();
            }
            return newState;
        default:
            return state;
    }
}