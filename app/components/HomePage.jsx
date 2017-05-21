import React, { Component } from 'react'
import NavbarReduxContainer from '../reduxcontainers/NavbarReduxContainer'
import { Link } from "react-router"

const Homepage = () => {
  return (
    <div>
      <div id="header-pic">
        <div>
          <div className="col-xs-4 line"><hr /></div>
          <div className="col-xs-4">
            <h1 id="blushfit">EmbarrassFit</h1>
          </div>
          <div className="col-xs-4 line"><hr /></div>
          <div className="col-xs-12"><h1 id="blushfit-sub">For When Fear of Decreased Life Expectancy and Quality of Life are Not Enough</h1></div>
          <div className="col-xs-4">
            <Link to={"/signup"}>
              <button className="ghost-button" id="signup-button">Signup/Risk Embarrassment</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="homepage-panels">
        <div className="col-xs-4 line"><hr /></div>
        <div className="col-xs-4"><h1 id="second-heading">Get Fit Through Fear</h1></div>
        <div className="col-xs-4 line"><hr /></div>
        <div className="col-xs-4">
          <h3 className="center">Give us Ammo</h3>
          <div className="panel-image" id="whisper-pic">
          </div>
          <p>Signup and tell us your goals and the secret that will be divulged if you don't meet them</p>
        </div>
        <div className="col-xs-4">
          <h3 className="center">Workout/Checkin</h3>
          <div className="panel-image" id="bar-workout-pic">
          </div>
          <p>Hit the gym and checkin on our mobile app that will ensure you are actually at the gym. </p>
        </div>
        <div className="col-xs-4">
          <h3 className="center">Miss your goal, get embarrassed</h3>
          <div className="panel-image" id="laughing-pic">
          </div>
          <p>Miss your weekly goal and we will text the number you have provided divulging your secret</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage

