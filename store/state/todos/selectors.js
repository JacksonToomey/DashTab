import { createSelector } from 'reselect';

const getTodos = ({ todos }) => todos;

export const getSortedTodos = createSelector(
    [getTodos],
    todos => todos.toList()
)