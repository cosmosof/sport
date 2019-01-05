import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import { players, playersFetchHasErrored, playersIsLoading } from './players';

export default combineReducers({
 simpleReducer, players, playersFetchHasErrored, playersIsLoading
});

