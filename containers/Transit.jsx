import React from 'react';
import { connect } from 'react-redux';

import TrainTime from '../components/TrainTime';

const Comp = ({
    trains,
}) => {
    return (
        <div className="transit-display">
            <h2>Train Times</h2>
            {trains.map((train, key) => {
                return (
                    <TrainTime key={ key } train={ train }/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    trains: state.transit
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
