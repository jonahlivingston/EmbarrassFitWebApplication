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
import LoginReduxContainer from "./reduxcontainers/LoginReduxContainer"
import NavbarReduxContainer from "./reduxcontainers/NavbarReduxContainer"
import UserReduxContainer from "./reduxcontainers/UserReduxContainer"
import {whoami} from './reducers/auth'
import User from "./components/User"
import axios from "axios";
import {authenticated} from "./reducers/auth"

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
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

function getUser(){
  store.dispatch(whoami())
}

function enterUser(){
axios.get('/api/auth/whoami')
.then(response => {
const user = response.data
store.dispatch(authenticated(user))
  var auth = store.getState().auth
  if (!store.getState().auth){
    alert("user does not appear to be signed in")
    browserHistory.push("/home")
  }
else{
return axios.get(`/api/users/${auth.email}`)
.then((user)=>{
console.log("gotbacknewuser",user)
store.dispatch(authenticated(user.data))
})
}
})

}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route name='Home' path="/" onEnter={getUser} component={ExampleApp}>
    <IndexRoute component={HomePage}/>
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={LoginReduxContainer} />
      <Route path='/signup' component={SignupPage} />
      <Route path="/dashboard" component={UserReduxContainer} onEnter={enterUser}/>
    </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('main')
)
