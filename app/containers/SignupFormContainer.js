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
        embarassingTextRecipient:"",
        weeklyWorkoutsCompleted:0,
        password:"",
        email:""
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
    console.log(this.state.gymLocation.address_components[0]["long_name"])
    const address = this.state.gymLocation.address_components[0]["long_name"]+"+"+this.state.gymLocation.address_components[1]["long_name"]+"+"+this.state.gymLocation.address_components[2]["long_name"]+"+"+this.state.gymLocation.address_components[3]["long_name"]+"+"+this.state.gymLocation.address_components[4]["long_name"]+"+"+this.state.gymLocation.address_components[5]["long_name"]+"+"+this.state.gymLocation.address_components[6]["long_name"]
    const searchString = "https://maps.googleapis.com/maps/api/geocode/json?address="
    const key = "&key=AIzaSyBSGAwfP8LYBNBHQphQJiY_dZ4riq7l1a8"
    // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBSGAwfP8LYBNBHQphQJiY_dZ4riq7l1a8"

    // // this.props.submitSignupForm(this.state.name,this.state.password,this.state.weeklyworkoutGoal,this.state.gymLocation,this.state.embarassingText,this.state.embarassingTextRecipient)
    this.props.submitAddress(searchString+address+key);
}

handleFormSubmit(event){
    this.props.submitSignupForm({
        name:this.state.name,
        weeklyWorkoutGoal:this.state.weeklyWorkoutGoal,
        weeklyWorkoutsCompleted:0,
        recipientNumber:this.state.embarassingTextRecipient,
        secret:this.state.embarassingText,
        longitude:this.props.addressInfo.longitude,
        latitude:this.props.addressInfo.latitude,
        email:this.state.email,
        password:this.state.password,
        remainingDays:7
})
}

render(){
    console.log(this.props)
    return(
    <div>
    < SignupForm auth={this.props.auth}field={this.state} handleFormSubmit={this.handleFormSubmit} handleFormSubmit={this.handleFormSubmit}handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipCode={this.props.addressInfo.zipCode}/>
    {this.props.addressInfo.latitude&&
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