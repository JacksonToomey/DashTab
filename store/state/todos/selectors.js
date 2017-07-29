import { createSelector } from 'reselect';

const getTodos = ({ todos }) => todos;

export const getSortedTodos = createSelector(
    [getTodos],
    todos => todos.toList().sort((f, s) => {
        if(f.get('complete') && !s.get('complete')) {
            return 1;
        }
        if(s.get('complete') && !s.get('complete')) {
            return -1;
        }

        if(f.get('id') > s.get('id')) {
            return -1;
        }
        return 0;
    })
)