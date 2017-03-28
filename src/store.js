import { createStore, applyMiddleware }from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers/index'

const initialState = {
  counter: {
      counter1: { 
        count: 1,
      },
      counter2: {
        count: 20
      }
  }
}

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(rootReducer, initialState, applyMiddleware(middleware))


export default store