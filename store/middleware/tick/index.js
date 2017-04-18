import { setTime } from '../../state/time/actions';

export default store => next => action => {
    if(action.type == 'START_TICK') {
        setInterval(() => {
            store.dispatch(setTime(new Date()))
        }, 60000)
    }
    return next(action);
}