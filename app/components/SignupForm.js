import React from "react"
import Navbar from "./Navbar"
import { Link } from "react-router"
import Autocomplete from 'react-google-autocomplete'
export default function (props) {
  return (
    <div>
      <div className="col-lg-4">
        <form>
          <label> Name</label>
          <input onChange={(event) => { props.handleChange(event.target.value, "name") }} className="form-control" type='text' placeholder="John Doe" ></input>
          <label>Email</label>
          <input onChange={(event) => { props.handleChange(event.target.value, "email") }} className="form-control" type='text' placeholder="johndoe@gmail.com" ></input>
          <label>Password</label>
          <input onChange={(event) => { props.handleChange(event.target.value, "password") }} className="form-control" type='password' placeholder="XXXXXXX" ></input>
          <label>Workout Goal Per Week</label>
          <select onChange={(event) => { props.handleChange(event.target.value, "weeklyWorkoutGoal") }} id="workoutoptions" className="custom-select ">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
          <label id="blocklabel">Gym Adress</label>
          <Autocomplete
            style={{ width: '90%' }}
            onPlaceSelected={(place) => {
              props.handleChange(place, "gymLocation") }
            }
            types={["address"]}
           
          />  
          
          <button onClick={(event) => { props.handleSubmit(event) }} className="btn btn-default">Enter Gym Adress</button>
          {/*<SimpleMap/>*/}
          {props.zipCode && <h1 className="red">{`Please proceed only if Zipcode is ${props.zipCode}`}</h1>}
          <label id="blocklabel">Secret</label>
          <textarea rows="3" className="form-control" onChange={(event) => { props.handleChange(event.target.value, "embarassingText") }} type="text"></textarea>
          <label id="blocklabel">Phone Number of Person Who Will Get Your Text if You Don't Meet Your Goal</label>
          <input className="form-control" onChange={(event) => { props.handleChange(event.target.value, "embarassingTextRecepient") }} type="text"></input>
          <Link to="/home">
            <button onClick={props.handleFormSubmit} className="btn btn-success">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

