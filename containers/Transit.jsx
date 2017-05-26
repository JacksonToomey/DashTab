import React from 'react';
import { connect } from 'react-redux';


const colorMap = {
    "BL": "blue",
    'OR': "orange",
    'SV': "grey lighten-1",
}

const Comp = ({
    trains,
}) => {
    return (
        <div className="transit-display">
            <h2>Train Times</h2>
            <table className="bordered striped">
                <thead>
                    <tr>
                        <th>Line</th>
                        <th>Destination</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train, key) => {
                        let cssClass = "chip";
                        let color = colorMap[train.get('Line')]
                        if(color) {
                            cssClass = cssClass + ' ' + color;
                        }
                        return (
                            <tr key={ key }>
                                <td>
                                    <span className={ cssClass }>{ train.get('Line') }</span>
                                </td>
                                <td>{ train.get('DestinationName') }</td>
                                <td>{ train.get('Min') }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    trains: state.transit
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
