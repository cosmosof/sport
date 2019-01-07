import { createSelector } from 'reselect'

export function playersFetchHasErrored(state = false, action) {
  switch (action.type) {
    case 'PLAYERS_FETCH_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export function playersIsLoading(state = false, action) {
  switch (action.type) {
    case 'PLAYERS_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export function players(state = [], action) {
  switch (action.type) {
    case 'PLAYERS_FETCH_DATA_SUCCESS':
      return action.items
    default:
      return state
  }
}

export function searchTerm(state = '', action) {
  switch (action.type) {
    case 'SEARCH_TERM':
      return action.value
    default:
      return state
  }
}

export function filterTerm(state = '', action) {
  switch (action.type) {
    case 'FILTER_TERM':
      return action.value
    default:
      return state
  }
}

const playersSelector = state => state.players
const searchTermSelector = state => state.searchTerm
const filterTermSelector = state => state.filterTerm

export const filteredPlayers = createSelector(
  [playersSelector, filterTermSelector],
  (players, filterTerm) => {
    switch (filterTerm) {
      case 'position':
        return players.sort((a, b) => {
          const _a = a.position.toUpperCase()
          const _b = b.position.toUpperCase()
          return _a > _b ? 1 : _b > _a ? -1 : 0
        })
        break
      case 'teamAbbr':
        return players.sort((a, b) => {
          const _a = a.teamAbbr.toUpperCase()
          const _b = b.teamAbbr.toUpperCase()
          return _a > _b ? 1 : _b > _a ? -1 : 0
        })
        break
      default:
        return players
        break
    }
  }
)

export const filteredByName = createSelector(
  [playersSelector, searchTermSelector],
  (players, searchTerm) => {
    return players.filter(player =>
      player.name.match(new RegExp(`\\b(${searchTerm})\\w+`, 'gi'))
    )
  }
)
