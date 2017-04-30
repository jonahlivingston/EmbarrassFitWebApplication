import LoginForm from "../components/LoginForm"
import React,{Component} from "react"

export default class LoginFormContainer extends Component{
constructor(props){
    super(props)
    this.state = {
        email:"",
        password:""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

handleChange(name,stateProperty){
   const changeObj=[]
   changeObj[stateProperty] = name
    this.setState(changeObj) 
}


handleFormSubmit(){
    console.log("thsiis",this)
    this.props.login(this.state.email,this.state.password)
}

render(){
    return(
    <div>
    <LoginForm handleFormSubmit={this.handleFormSubmit} handleChange={this.handleChange} />
    </div>
    )
}
}
