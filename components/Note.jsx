import React from 'react';


export default ({
    note,
    onChange
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
        </div>
    )
}