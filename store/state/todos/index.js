import { Map } from 'immutable';
import * as types from './types';


export default (state = new Map(), action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return state.withMutations(s => {
                let {
                    todo
                } = action.payload;
                return s.set(todo.get('id'), todo);
            })
        case types.COMPLETE_TODO:
            return state.withMutations(s => {
                let { id } = action.payload;
                return s.setIn([id, 'complete'], true);
            });
        case types.REMOVE_TODO:
            return state.withMutations(s => {
                let { id } = action.payload;
                return s.remove(id);
            })
        case types.LOAD_TODOS:
            return action.payload.todos;
        default:
            return state;
    }
}