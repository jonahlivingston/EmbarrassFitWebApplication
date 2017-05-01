import React, { Component } from 'react'
import NavbarReduxContainer from '../reduxcontainers/NavbarReduxContainer'
import { Link } from "react-router"
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="headerpic">
          <div className="headertext">
            <div className="col-xs-4 line"><hr /></div>
            <div className="col-xs-4">
              <h1 id="Blushfit">EmbarassFit</h1>
            </div>
            <div className="col-xs-4 line"><hr /></div>
            <div className="col-xs-12"><h1 id="Blushfitsub">For When Fear of Decreased Life Expectancy and Quality of Life are Not Enough</h1></div>
            <div className="col-xs-4">
              <Link to={"/signup"}>
                <button className="ghost-button">Signup/Risk Embarassment</button>
              </Link>
              </div>
          </div>
            </div>
            <div id="secondtab">
              <div className="col-xs-4 line"><hr /></div>
              <div className="col-xs-4"><h1 id="secondheading">Get Fit Through Fear</h1></div>
              <div className="col-xs-4 line"><hr /></div>
              <div className="col-xs-4">
                <h3 className="steptitle">Give us Ammo</h3>
                <div className="image" id="imageone">
                </div>
                <p>Signup and tell us your goals and the secret that will be divulged if you don't meet them</p>
              </div>
              <div className="col-xs-4">
                <h3 className="steptitle">Workout/Checkin</h3>
                <div className="image" id="imagetwo">
                </div>
                <p>Hit the gym and checkin on our mobile app that will ensure you are actually at the gym. </p>
              </div>
              <div className="col-xs-4">
                <h3 className="steptitle">Miss your goal, get embarassed</h3>
                <div className="image" id="imagethree">
                </div>
                <p>Miss your weekly goal and we will text the number you have provided divulging your secret</p>
              </div>
            </div>

          </div>
          )
  }
}

