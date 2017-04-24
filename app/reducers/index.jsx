import { combineReducers } from 'redux'
import latLong from "./latLong"


const rootReducer = combineReducers({
  adressInfo:latLong
})

export default rootReducer
