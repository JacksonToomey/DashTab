import React from 'react';
import { connect } from 'react-redux';

import { getTime } from '../store/state/time/selectors';

const Comp = ({
    time
}) => {
    let ampm = 'am';
    let hours = time.getHours();
    if(hours >= 12) {
        ampm = 'pm';
        hours = hours - 12;
        if(hours == 0) {
            hours = 12;
        }
    }

    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes.toString();
    }
    return (
        <div className="valign-wrapper dashtab-time">
            <h1 className="time-display center-align">{ hours }:{ minutes }{ ampm }</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    time: getTime(state)
})

export default connect(mapStateToProps)(Comp);
