import { combineReducers } from 'redux'
import {
  players,
  playersFetchHasErrored,
  playersIsLoading,
  searchTerm,
  filterTerm,
} from './players'

export default combineReducers({
  players,
  playersFetchHasErrored,
  playersIsLoading,
  searchTerm,
  filterTerm,
})
