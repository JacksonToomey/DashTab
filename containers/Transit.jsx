import React from 'react';
import { connect } from 'react-redux';


const Comp = (props) => {
    return (
        <div className="transit-display"></div>
    )
}

export default connect()(Comp);
