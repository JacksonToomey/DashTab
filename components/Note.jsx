import React from 'react';


export default ({
    note,
    onChange,
    onDelete,
}) => {
    return (
        <div className="note-display">
            <textarea
                value={ note.get('content') }
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