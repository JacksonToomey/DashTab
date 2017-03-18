import moment from 'moment-timezone';


export default {
    state: {
        _current: moment()
    },
    getters: {
        currentTime(state, getters, rootState) {
            // moment.tz.setDefault(rootState.settings.timezone);
            return state._current.tz(rootState.settings.timezone);
        }
    },
    mutations: {
        updateTime(state) {
            state._current = moment()
        }
    }
}