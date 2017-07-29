import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { startTick } from './store/middleware/tick/actions';
import { addTodo } from './store/state/todos/actions';

import Time from './containers/Time';
import Progress from './containers/Progress';
import Transit from './containers/Transit';
import Todos from './containers/Todos';

import './app.scss';


ReactDOM.render(
    <Provider store={store}>
        <div className="dash-tab-app">
            <div className="row">
                <div className="col s12">
                    <Time />
                    <Progress />
                </div>
            </div>
            <div className="row">
                <div className="dash-widget col s6">
                    <div className="wrapper">
                        <Todos />
                    </div>
                </div>
                <div className="dash-widget col s6">
                    <div className="wrapper">
                        <Transit />
                    </div>
                </div>
            </div>
        </div>
    </Provider>
    ,
    document.getElementById('app')
)

store.dispatch(startTick());