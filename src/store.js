import { createStore }from 'redux'
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import rootReducer from './reducer/index'

const initialState = {
  counter1: { 
    count: 1,
   },
   counter2: {
     count: 20
   }
}

const browserHistory = createHistory()

const store = createHistory(rootReducer, initialState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store