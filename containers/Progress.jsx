import React from 'react';
import { connect } from 'react-redux';

import { getTotalMinutes, getPassedMinutes } from '../store/state/workday/selectors';

const Comp = ({
    total,
    passed,
}) => {
    let percent = Math.round(passed / total * 100)
    return (
        <div className="progress-display">{ passed } of { total } { percent }%</div>
    )
}

const mapStateToProps = state => ({
    total: getTotalMinutes(state),
    passed: getPassedMinutes(state),
})

export default connect(mapStateToProps)(Comp);
