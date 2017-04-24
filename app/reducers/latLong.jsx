import axios from 'axios'

const reducer = (state = {latitude:"",longitude:"",zipCode:""}, action) => {
  switch (action.type){
    case "SYNC_SUBMIT_GYM_ADDRESS":
    console.log("heyy",action.latLong)
      return {latitude: action.adressInfo.latLong.lat, longitude: action.adressInfo.latLong.lng,zipCode:action.adressInfo.zipCode}
    default:
      return state;
  }
}
  export default reducer
