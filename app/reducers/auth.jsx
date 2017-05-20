import axios from 'axios'
import {browserHistory} from "react-router"


const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

//uses local authentication strategy and redirects to home page
export const login = (username, password) =>
  dispatch =>{
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => {
        dispatch(whoami())})
        browserHistory.push("/home")
      .catch(() => {
        dispatch(whoami())
        alert("Incorrect Email or Password")
      })
  }

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

//gets user from session and attaches it to auth in the store
export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))


//creates a user in the database
export const createUser = (newUser) => dispatch => {
	axios.post('/api/users', newUser)
	.then((response) => {
		return axios.post("/api/auth/login/local"
    ,{
      username:response.data.email,password:response.data.password
    }
		)})
  .then((user)=>{
    dispatch(whoami())
  })
}


export default reducer