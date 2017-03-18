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
        timezone: 'America/New_York',
        weatherUnits: 'imperial',
    },
}