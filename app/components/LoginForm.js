import React from 'react'
const LoginForm = (props) => {
  console.log(props)
  return(
    <div>
<div className="col-lg-12"id="signuppage">
  <div id="signupform"className="col-lg-4">
    <form>
      <label className="white">Email</label>
       <input onChange={(event) => { props.handleChange(event.target.value, "email") }} className="form-control" type='text' placeholder="johndoe@gmail.com" ></input>
      <br/>
      <label className="white">Password</label>
       <input type="password" onChange={(event) => { props.handleChange(event.target.value, "password") }} className="form-control" type='text' placeholder="XXXXXXXX" ></input>
       <button className="ghost-buttontwo" onClick={(event)=>{
         event.preventDefault()
          props.handleFormSubmit()
         }}>Submit</button>
      </form>
    </div>
  </div>
  </div>
)
}


export default LoginForm