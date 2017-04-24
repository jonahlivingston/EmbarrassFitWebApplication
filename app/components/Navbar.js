import React from "react"
import { Link } from "react-router"
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-inverse navbar-static-top">
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
            </ul>
        </div>
        </nav>
    )   
}
export default Navbar;