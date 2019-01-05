import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/RootReducer'

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(thunk))
export default createStore;
/* const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}
 */
//const initialState = { count: 0 }

//const createStore = () => reduxCreateStore(reducer, initialState)
//export default createStore
