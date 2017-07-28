import storage from 'localforage'
import * as todoTypes from '../../state/todos/types';
import { getSortedTodos } from '../../state/todos/selectors';
import { loadTodos } from '../../state/todos/actions';

var loaded = false;


export default store => next => action => {
    if(!loaded) {
        loaded = true;
        storage.getItem('todos').then(todos => {
            if(todos) {
                store.dispatch(loadTodos(todos))
            }
        })
    }

    let nxt = next(action);
    if(Object.values(todoTypes).indexOf(action.type) != -1) {
        let todos = store.getState().todos;
        storage.setItem('todos', todos.toJS());
    }
    return nxt;
};
