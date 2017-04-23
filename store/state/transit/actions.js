import * as types from './types';

export const setTrainTimes = trainTimes => ({
    type: types.SET_TRAIN_TIMES,
    payload: trainTimes,
})