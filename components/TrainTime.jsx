import React from 'react';


export default ({
    train
}) => {
    console.log(train.toJS());
    return (
        <div className="train-time-display">
            <h3>{ train.get('DestinationName') }</h3>
            <div>{ train.get('Line') }</div>
            <div>{ train.get('Min') }</div>
        </div>
    )
}