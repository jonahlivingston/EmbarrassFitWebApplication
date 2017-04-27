import { connect } from "react-redux"
import SignupFormContainer from "../containers/SignupFormContainer"
import { submitGymAddress } from "../actioncreators"
import {submitSignupForm} from "../actioncreators"

const mapStateToProps = (state) => {
    return {
        adressInfo: state.adressInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitAdress(searchString) {
            dispatch(submitGymAddress(searchString))
        },
        submitSignupForm(userData){
            dispatch(submitSignupForm(userData))
        }
    }
}

const SignupFormReduxContainer = connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer)
export default SignupFormReduxContainer
