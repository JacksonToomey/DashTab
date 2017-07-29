import React from 'react';
import PropTypes from 'prop-types';

import TodoRecord from '../store/state/todos/records';

const Todo = ({
    todo,
    onCheckClick,
    onDeleteClick,
}) => {
    let icon = 'check_box_outline_blank';
    let className = 'row dashtab-todo';
    if(todo.get('complete')) {
        icon = 'check_box';
        className = className + ' complete'
    }
    return (
        <div className={ className }>
            <div className="col s1">
                <i className="material-icons" onClick={() => { onCheckClick(todo.get('id')); }}>
                    { icon }
                </i>
            </div>
            <div className="col s10 description">
                { todo.get('description') }
            </div>
            <div className="col s1">
                <i className="material-icons" onClick={() => { onDeleteClick(todo.get('id')); }}>
                    delete
                </i>
            </div>
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.instanceOf(TodoRecord).isRequired,
    onCheckClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
}


Todo.defaultProps = {
    onCheckClick: () => {},
    onDeleteClick: () => {},
}

export default Todo