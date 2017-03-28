import React from 'react'

//Routes
import NotFound from './components/shared/NotFound'
import App from './components/App';
import LoginTransition from './components/shared/LoginTransition';
import Public from './components/Public';
import Private from './components/Private';
import AuthError from './components/shared/AuthError';


//Init components
import { auth } from './utils/init'

//Redux
import { Provider } from 'react-redux'
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'

//React-router 
import {  Route, Redirect, Switch } from 'react-router-dom'

//Private Routes
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} 
    render={props => (
              auth.loggedIn() ? 
                React.createElement(component, props) : 
                <Redirect 
                  to={{ pathname: '/auth/error',
                        state: { from: props.location }
                     }}
                />
            )
          }
  />
)

const Routes = (props) => {
  console.log('history', history)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
            <Route path="/"  exact component={App} />  
            <Route path="/auth"  exact component={LoginTransition} />  
            <Route path="/auth"  exact component={LoginTransition} />  
            <Route path="/public"  exact component={Public} />  
            <Route path="/auth/error"  exact component={AuthError} />  
            <PrivateRoute path="/private"  exact component={Private} />  
            <Route component={NotFound} />  
            <Route path="/" exact component={App} />  
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default Routes