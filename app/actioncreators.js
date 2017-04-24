import axios from "axios";




const syncSubmitGymAddress = (adressInfo)=>{
return{
    type:"SYNC_SUBMIT_GYM_ADDRESS",
    adressInfo:adressInfo
}
}

// const syncSubmitSignupInfo = (info)=>{
//     return{
//         type:"SYNC_SUBMIT_SIGNUP_INFO",
//         info:info
//     }
// }

export const submitSignupForm = (signupInfo)=>{
    return (dispatch)=>{
        axios.post("/api/users",signupInfo)
        .then((user)=>{
            console.log("user")
        })
    }
}

export const submitGymAddress = (searchString) => {
    return (dispatch) => {
        axios.get(searchString)
            .then((result) => {
                console.log(typeof result.data.results[0].formatted_address)
                dispatch(syncSubmitGymAddress({latLong:result.data.results[0].geometry.location,zipCode:result.data.results[0].formatted_address.split(",")[2]}))
            })
    }
}