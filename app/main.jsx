'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import HomePage from "./components/HomePage";
import store from './store'
import SignupPage from "./components/SignupPage"
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
// import googleMap from "./components/googleMap"

render (
  <MuiThemeProvider>
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/home" component={HomePage} />
    {/*<Route path="/map" component={googleMap} />*/}
    <Route path='/signup' component={SignupPage} />
    </Router>
  </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('main')
)
