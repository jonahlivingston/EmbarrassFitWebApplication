import Navbar from "../components/Navbar"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const NavbarReduxContainer = connect(mapStateToProps,null)(Navbar)
export default NavbarReduxContainer;