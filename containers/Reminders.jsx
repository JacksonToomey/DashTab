import React from 'react';
import { connect } from 'react-redux';


const Comp = (props) => {
    return (
        <div className="reminders-display"></div>
    )
}

export default connect()(Comp);
