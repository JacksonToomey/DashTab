import { createSelector } from 'reselect';

import { getTime } from '../time/selectors';

export const getStartHour = ({ workday }) => workday.getIn(['start', 'hour']);
export const getStartMinute = ({ workday }) => workday.getIn(['start', 'minute']);
export const getEndHour = ({ workday }) => workday.getIn(['end', 'hour']);
export const getEndMinute = ({ workday }) => workday.getIn(['end', 'minute']);

export const getTotalMinutes = createSelector(
    [getStartHour, getStartMinute, getEndHour, getEndMinute],
    (startHour, startMinute, endHour, endMinute) => {
        endHour = endHour + 12;
        let end = endHour * 60;
        let start = startHour * 60;
        start += startMinute;
        end += endMinute;
        return end - start;
    }
)

export const getPassedMinutes = createSelector(
    [getStartHour, getStartMinute, getEndHour, getEndMinute, getTime],
    (startHour, startMinute, endHour, endMinute, time) => {
        console.log(time.getFullYear());
        let start = new Date(
            time.getFullYear(),
            time.getMonth(),
            time.getDate(),
            startHour,
            startMinute,
        );

        return Math.round((time.getTime() - start.getTime()) / (1000 * 60));
    }
)