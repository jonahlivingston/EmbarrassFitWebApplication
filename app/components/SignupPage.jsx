import React,{Component} from 'react'
import {connect} from "react-redux"
import SignupFormReduxContainer from "../reduxcontainers/SignupFormReduxContainer"
import NavbarReduxContainer from "../reduxcontainers/NavbarReduxContainer"
class SignupPage extends Component{
  render(){
  return( 
    <div>
  <SignupFormReduxContainer/>
  </div>
  )
  }
}
export default SignupPage;

