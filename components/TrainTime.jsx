import React from 'react';

const COLORS = {
    'BL': '#1F93D1',
    'OR': '#DC8927',
    'SV': '#A1A3A1'
}

export default ({
    train
}) => {
    console.log(train.toJS());
    let backgroundColor = COLORS[train.get('Line')];
    return (
        <div style={ { backgroundColor } } className="train-time-display">
            <span className="destination">{ train.get('DestinationName') }</span>
            <span className="minutes">{ train.get('Min') }</span>
        </div>
    )
}