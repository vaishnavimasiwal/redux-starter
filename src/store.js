import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer) //takes function as an argument

export default store;