import {createStore, combineReducers} from 'redux';
import Reducer from './Reducer';

const reducer = combineReducers({
  reducer: Reducer,
})

const store = createStore(reducer);

export default store;
