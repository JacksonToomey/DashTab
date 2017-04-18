import State from './records';
// import * as types from './types'

export default (state = new State(), action) => {
    switch(action.type) {
        default:
            return state;
    }
}