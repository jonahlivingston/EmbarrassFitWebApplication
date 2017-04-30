import { combineReducers } from 'redux'
import latLong from "./latLong"
import auth from "./auth"

const rootReducer = combineReducers({
  addressInfo:latLong,
  auth: auth
})

export default rootReducer
