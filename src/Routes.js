import React from 'react'

//Routes
import NotFound from './components/shared/NotFound'
import App from './components/App';
import LoginTransition from './components/shared/LoginTransition';
import Public from './components/Public';
import Private from './components/Private';
import AuthError from './components/shared/AuthError';

//React-router 
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//Init components
import { auth } from './utils/init'

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
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <Route path="/auth" exact component={LoginTransition} />  
        <Route path="/public" exact component={Public} />  
        <Route path="/auth/error" exact component={AuthError} />  
        <PrivateRoute path="/private" exact component={Private} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes