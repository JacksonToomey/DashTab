import { Record, List } from 'immutable';

export const Note = Record({
    content: '',
    created: new Date(),
})

export default Record({
    notes: List()
});