import SignupForm from "../components/SignupForm"
import React,{Component} from "react"
import {submitSignupForm} from "../actioncreators"
export default class SignupFormContainer extends Component{
constructor(props){
    super(props)
    this.state = {
        name: "",
        weeklyWorkoutGoal:1,
        gymLocation:"",
        embarassingText: "",
        embarassingTextRecepient:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
}

handleChange(name,stateProperty){
   const changeObj=[]
   changeObj[stateProperty] = name
    this.setState(changeObj) 
}

handleSubmit(event){
    event.preventDefault()
    console.log(typeof this.state.gymLocation)
    const address = this.state.gymLocation.split(" ").join("+")
    const searchString = "https://maps.googleapis.com/maps/api/geocode/json?address="
    const key = "&key=AIzaSyBSGAwfP8LYBNBHQphQJiY_dZ4riq7l1a8"
    // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBSGAwfP8LYBNBHQphQJiY_dZ4riq7l1a8"

    // // this.props.submitSignupForm(this.state.name,this.state.password,this.state.weeklyworkoutGoal,this.state.gymLocation,this.state.embarassingText,this.state.embarassingTextRecipient)
    this.props.submitAdress(searchString+address+key);
}

handleFormSubmit(event){
    event.preventDefault()
    this.props.submitSignupForm({
        name:this.state.name,
        weeklyWorkoutGoal:this.state.weeklyWorkoutGoal,
        recipientNumber:this.state.embarassingTextRecipient,
        secret:this.state.embarassingText,
        longitude:this.props.adressInfo.longitude,
        latitude:this.props.adressInfo.latitude
})
}

render(){
    console.log(this.props)
    return(
    <div>
    < SignupForm handleFormSubmit={this.handleFormSubmit} handleFormSubmit={this.handleFormSubmit}handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipCode={this.props.adressInfo.zipCode}/>
    {this.props.adressInfo.latitude&&
    <div>
    {/*<h1>Latitude: {this.props.adressInfo.latitude}</h1>
    <h1>Longitude: {this.props.adressInfo.longitude}</h1>*/}
    </div>
        }
    </div>
    )
}
}


///AIzaSyBSGAwfP8LYBNBHQphQJiY_dZ4riq7l1a8




///models for my app, staying logged in,