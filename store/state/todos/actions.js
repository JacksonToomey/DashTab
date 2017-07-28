import * as types from './types';
import { Map } from 'immutable'
import Todo from './records';

export const loadTodos = todos => {
    let newState = {};
    Object.values(todos).forEach(t => {
        newState[t.id] = new Todo(t);
    })
    return {
        type: types.LOAD_TODOS,
        payload: {
            todos: new Map(newState)
        }
    }
}

export const addTodo = description => {
    let id = String(Date.now());
    let todo = new Todo({ description, id });
    return {
        type: types.ADD_TODO,
        payload: {
            todo
        }
    }
}

export const completeTodo = id => ({
    type: types.COMPLETE_TODO,
    payload: {
        id
    }
});

export const removeTodo = id => ({
    type: types.REMOVE_TODO,
    payload: {
        id
    }
})