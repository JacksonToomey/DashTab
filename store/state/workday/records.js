import { Record } from 'immutable';

export const TimeRecord = Record({
    hour: 0,
    minute: 0,
})


export default Record({
    start: new TimeRecord({ hour: 9 }),
    end: new TimeRecord({ hour: 5, minute: 30 }),
});