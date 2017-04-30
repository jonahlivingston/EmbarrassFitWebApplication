import axios from 'axios'

const reducer = (state = {latitude:"",longitude:"",zipCode:""}, action) => {
  switch (action.type){
    case "SYNC_SUBMIT_GYM_ADDRESS":
    console.log("heyy",action.latLong)
      return {latitude: action.addressInfo.latLong.lat, longitude: action.addressInfo.latLong.lng,zipCode:action.addressInfo.zipCode}
    default:
      return state;
  }
}
  export default reducer
