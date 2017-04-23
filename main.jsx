import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { startTick } from './store/middleware/tick/actions';

import Time from './containers/Time';
import Progress from './containers/Progress';
import Notes from './containers/Notes';
import Transit from './containers/Transit';

import './app.scss';


ReactDOM.render(
    <Provider store={store}>
        <div className="dash-tab-app">
            <div className="dash-widget">
                <Notes />
            </div>
            <div className="dash-widget">
                <Time />
                <Progress />
            </div>
            <div className="dash-widget">
                <Transit />
            </div>
        </div>
    </Provider>
    ,
    document.getElementById('app')
)

store.dispatch(startTick());