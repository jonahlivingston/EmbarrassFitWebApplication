import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

export const Login = ({ login }) => (
<div className='container text-center'>
  {/*lol*/}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div id="login-signup">
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <TextField
        hintText="username"
        name="username"
      />
      <br/>
      <TextField
        hintText="password"
        name="password"
        type="password"
      />
      <br/>
      <RaisedButton type="submit" label="Login" backgroundColor='#3C3970' labelColor='white' style={{marginRight: '20px'}} />
    </form>
    <div className="or buffer">
      <div className="back-line">
        <span>OR</span>
      </div>
    </div>
    <div className="buffer oauth">
      <p>

      <RaisedButton
        href="/api/auth/login/google"
        target="_self"
        label="Sign In With Google"
        secondary={true}
        style={styles.button}
        icon={<FontIcon className="muidocs-icon-custom-google" />}
      />
       <RaisedButton
        href="/api/auth/login/facebook"
        target="_self"
        label="Sign In With Facebook"
        secondary={true}
        style={styles.button}
        icon={<FontIcon className="muidocs-icon-custom-google" />}
      />
      </p>
    </div>
  </div>
</div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)