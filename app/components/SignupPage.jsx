import React,{Component} from 'react'
import {connect} from "react-redux"
import SignupFormReduxContainer from "../reduxcontainers/SignupFormReduxContainer"

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

