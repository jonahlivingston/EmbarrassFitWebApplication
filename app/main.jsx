'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import HomePage from "./components/HomePage";
import store from './store'
import SignupPage from "./components/SignupPage"
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {whoami} from './reducers/auth'
import Login from './components/Login'
import NavbarReduxContainer from "./reduxcontainers/NavbarReduxContainer"
import {whoami} from './reducers/auth'


const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <NavbarReduxContainer />
      {children}
    </div>
)

const LoginPage = connect(
  ({ auth }) => ({ user: auth })
  //[auth:4 = >
)(
  ({ user, children }) =>
  <MuiThemeProvider>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
  </MuiThemeProvider>
)

function getUser(){
  store.dispatch(whoami())
}

//injectTapEventPlugin();
// import googleMap from "./components/googleMap"

render (
  <MuiThemeProvider>
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route name='Home' path="/" onEnter={getUser} component={ExampleApp}>
    <IndexRoute component={HomePage}/>
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
    </Route>
    </Router>
  </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('main')
)
