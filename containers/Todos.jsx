import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo';

import Todo from '../components/Todo';

import { getSortedTodos } from '../store/state/todos/selectors';

import { completeTodo, removeTodo } from '../store/state/todos/actions';


const Comp = ({
    todos,
    complete,
    remove,
}) => {
    return (
        <div className="dashtab-todos">
            <h2>Todos</h2>
            <AddTodo />
            {todos.map((todo, key) => {
                return <Todo
                    key={ key }
                    todo={ todo }
                    onCheckClick={ complete }
                    onDeleteClick={ remove }/>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: getSortedTodos(state)
});

const mapDispatchToProps = dispatch => ({
    complete: id => {
        dispatch(completeTodo(id));
    },
    remove: id => {
        dispatch(removeTodo(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
