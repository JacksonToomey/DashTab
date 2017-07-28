import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../store/state/todos/actions';


class AddTodoComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {newText: ''};

        this.changeText = this.changeText.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    changeText(e) {
        this.setState({newText: e.target.value});
    }

    keyPress(e) {
        if(e.key === 'Enter') {
            this.props.create(e.target.value);
            this.setState({newText: ''});
        }
    }

    render() {
        return (
            <div className="row dashtab-add-todo">
                <div className="input-field col s12">
                    <input
                        id="description"
                        type="text"
                        placeholder="Description"
                        onChange={ this.changeText }
                        value={ this.state.newText }
                        onKeyPress={ this.keyPress }/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    create: val => {
        dispatch(addTodo(val));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComp);
