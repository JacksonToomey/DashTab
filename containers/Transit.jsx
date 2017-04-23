import React from 'react';
import { connect } from 'react-redux';


const Comp = ({
    trains,
}) => {
    return (
        <div className="transit-display">
            {trains.map((train, key) => {
                return (
                    <div key={key} >
                        { train.get('DestinationName') } - { train.get('Min') } - { train.get('Line') }
                    </div>
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
