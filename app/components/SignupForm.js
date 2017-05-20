import React from "react"
import Navbar from "./Navbar"
import { Link } from "react-router"
import Autocomplete from 'react-google-autocomplete'
import { browserHistory } from 'react-router';
export default function (props) {
  return (
    <div>
      <div className="col-lg-12"id="signup-page">
      <div id="signup-form"className="col-lg-4">
        <h1>Signup</h1>
        <form>
          <label className="white"> Name</label>
          <input onChange={(event) => { props.handleChange(event.target.value, "name") }} className="form-control" type='text' placeholder="John Doe" ></input>
          <label>Email</label>
          <input onChange={(event) => { props.handleChange(event.target.value, "email") }} className="form-control" type='text' placeholder="johndoe@gmail.com" ></input>
          <label>Password</label>
          <input onChange={(event) => { props.handleChange(event.target.value, "password") }} className="form-control" type='password' placeholder="XXXXXXX" ></input>
          <label>Workout Goal Per Week</label>
          <select id="workout-goal" onChange={(event) => { props.handleChange(event.target.value, "weeklyWorkoutGoal") }} id="workout-options" className="custom-select ">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
          <label className="block-label">Gym Adress</label>
          
          <Autocomplete
            placeholder="Enter Adress of Gym"
            style={{ width: '90%' }}
            onPlaceSelected={(place) => {
              props.handleChange(place, "gymLocation") }
            }
            types={["address"]}
          />  
          <button id="adress-btn" onClick={(event) => { props.handleSubmit(event) }} className="btn btn-default">Enter Gym Adress</button>
          
          {/* Postal code appears of the adress that was entered */}
          {props.zipCode && <h1 className="red">{`Please proceed only if Zipcode is ${props.zipCode}`}</h1>}
          
          <label className="block-label">Secret</label>
          <textarea rows="3" className="form-control" onChange={(event) => { props.handleChange(event.target.value, "embarassingText") }} type="text"></textarea>
          <label className="block-label">Phone Number of Person Who Will Get Your Text if You Don't Meet Your Goal</label>
          <input className="form-control" onChange={(event) => { 
            props.handleChange(event.target.value, "embarassingTextRecipient") }} type="text"></input>
            <button className="ghost-button submit-login" onClick={(event)=>{
              event.preventDefault()

              // validations could be refactored to avoid having so many conditionals
              if (props.field.email==="")alert("Please Enter Email")
              else if (props.field.password==="")alert("Please Enter Password")
              else if (props.field.embarassingTextRecipient.split("").includes("-")||props.field.embarassingTextRecipient.split("").includes(" "))alert("Please enter phone number with no delimiting characters ")
              else if (props.field.embarassingText==="") alert("Enter Your Secret")
              else if (props.field.name==="")alert("Please Enter Name")
              else if (props.field.address==="")alert("Please Enter Address")
              else if (!props.zipCode)alert("Unable to find address. Please ensure you have clicked Enter Gym Adress")
              else if (props.auth) alert("You Must Sign Out Before Signing Up")
              else{
                props.handleFormSubmit()
               browserHistory.push('/home')
                }
              }}>Submit</button>
        </form>
      </div>
      </div>
    </div>
  )
}