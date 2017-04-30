import { connect } from "react-redux"
import LoginFormContainer from "../containers/LoginFormContainer"
import {login} from "../reducers/auth"

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(email,password) {
            dispatch(login(email,password))
        }
    }
}

const LoginFormReduxContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
export default LoginFormReduxContainer
