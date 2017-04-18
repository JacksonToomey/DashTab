import * as types from './types';
import { Note } from './records';

export const addNote = () => ({
    type: types.ADD_NOTE,
    payload: new Note()
});

export const updateNote = (index, text) => ({
    type: types.UPDATE_NOTE,
    payload: {
        index,
        text,
    }
})