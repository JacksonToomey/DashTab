import React from 'react';
import { connect } from 'react-redux';

import { getTotalMinutes, getPassedMinutes } from '../store/state/workday/selectors';

const Comp = ({
    total,
    passed,
}) => {
    let percent = Math.round(passed / total * 100);
    let width = percent.toString() + '%';
    return (
        <div className="progress-display progress">
            <div className="progress-amount determinate" style={ { width } }></div>
        </div>
    )
}

const mapStateToProps = state => ({
    total: getTotalMinutes(state),
    passed: getPassedMinutes(state),
})

export default connect(mapStateToProps)(Comp);
