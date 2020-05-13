import store from './store';
import { bugAdded,bugRemoved } from './actions';

const unsubscribe = store.subscribe(() => {
        console.log("Store changed", store.getState())
});

store.dispatch(bugAdded("Bug 1"));

unsubscribe();

store.dispatch(bugRemoved(1));