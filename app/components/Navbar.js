import React from "react"
import { Link } from "react-router"
import { logout } from "../reducers/auth"
import store from "../store"
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-inverse navbar-static">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <Link to="/home">
                        <li className="navbar-text" id="white">Home</li>
                    </Link>
                    <Link to="/signup">
                        <li className="navbar-text" id="white" >Signup</li>
                    </Link>
                    <Link to="/testemonials">
                        <li className="navbar-text" id="white">Testemonials</li>
                    </Link>
                    <Link to="/dashboard">
                        <li className="navbar-text" id="white">{props.auth && `${props.auth.name}'s dashboard`}</li>
                    </Link>
                    <li className="navbar-text" id="white">{props.auth && `Signed in as: ${props.auth.name}`}</li>
                    <Link to="/home">
                        <li className="navbar-text" onClick={() => store.dispatch(logout())}>{props.auth && "Logout"}</li>
                    </Link>
                    <Link to="/login">
                        <li className="navbar-text">{!props.auth && "Login"}</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;