import React from 'react';


export default ({
    note,
    onChange,
    onDelete,
    onEnter
}) => {
    return (
        <div className="note-display">
            <textarea
                value={ note.get('content') }
                onKeyPress={e => {
                    if(e.key == 'Enter') {
                        onEnter();
                    }
                }}
                onChange={e => {
                    if(onChange) {
                        onChange(e.target.value);
                    }
                }}>
            </textarea>
            <button
                onClick={() => {
                    if(onDelete) {
                        onDelete();
                    }
                }}>
                Delete
            </button>
        </div>
    )
}