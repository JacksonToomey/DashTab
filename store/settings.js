import moment from 'moment-timezone';

moment.tz.setDefault('UTC');

export default {
    state: {
        startTime: {
            hour: 9,
            minute: 0
        },
        endTime: {
            hour: 17,
            minute: 30
        },
        timezone: moment.tz.guess(),
        weatherUnit: 'fahrenheit',
        location: '22314',
        visible: false,
    },
    mutations: {
        setVisible(state) {
            state.visible = true;
        },
        setHidden(state) {
            state.visible = false;
        },
        setWeatherUnit(state, unit) {
            state.weatherUnit = unit;
        },
        setLocation(state, location) {
            state.location = location;
        }
    }
}