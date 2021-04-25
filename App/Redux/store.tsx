import {createStore, combineReducers} from 'redux';
import profileDetailReducer from './Reducer';

const rootReducer = combineReducers({
  profileDetailReducer: profileDetailReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
