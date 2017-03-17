import moment from 'moment-timezone';


export default {
    state: {
        currentTime: moment()
    },
    mutations: {
        updateTime(state) {
            state.currentTime = moment()
        }
    }
}