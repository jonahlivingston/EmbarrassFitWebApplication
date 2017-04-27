import axios from "axios";
import { whoami } from "./reducers/auth"



const syncSubmitGymAddress = (adressInfo) => {
    return {
        type: "SYNC_SUBMIT_GYM_ADDRESS",
        adressInfo: adressInfo
    }
}

// const syncSubmitSignupInfo = (info)=>{
//     return{
//         type:"SYNC_SUBMIT_SIGNUP_INFO",
//         info:info
//     }
// }

export const submitSignupForm = (signupInfo) => {
    console.log("info",signupInfo)
    return (dispatch) => {
        axios.post("/api/users", signupInfo)
            .then((user) => {
                console.log("user is", user)
                return axios.post("/api/auth/login/local"
                    , {
                        username: user.data.email, password: user.data.password
                    })
            })
            .then((user) => {
                dispatch(whoami())
            })
    }
}


export const submitGymAddress = (searchString) => {
    return (dispatch) => {
        axios.get(searchString)
            .then((result) => {
                console.log("heyyyyyyyyy", result.data)
                dispatch(syncSubmitGymAddress({ latLong: result.data.results[0].geometry.location, zipCode: result.data.results[0].formatted_address.split(",")[2] }))
            })
    }
}