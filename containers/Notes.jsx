import React from 'react';
import { connect } from 'react-redux';

import Note from '../components/Note';

import { getNotes } from '../store/state/notes/selectors';

import { addNote, updateNote } from '../store/state/notes/actions';


const Comp = ({
    notes,
    add,
    update,
}) => {
    return (
        <div className="notes-display">
            <button onClick={ add }>Add Note</button>
            {notes.map((n, k) => {
                return (
                    <Note
                        note={ n }
                        onChange={t => {
                            update(k, t);
                        }}
                        key={ k } />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    notes: getNotes(state)
});

const mapDispatchToProps = dispatch => ({
    add: () => {
        dispatch(addNote());
    },
    update: (index, text) => {
        dispatch(updateNote(index, text));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp);
