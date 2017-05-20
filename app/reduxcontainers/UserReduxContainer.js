import { connect } from "react-redux"
import User from "../components/User"

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

const UserReduxContainer = connect(mapStateToProps, null)(User)
export default UserReduxContainer;
