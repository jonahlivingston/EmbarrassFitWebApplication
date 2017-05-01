import React, { Component } from "react"
import { Circle } from 'rc-progress'
export default class User extends Component {
    render() {
        console.log(this.props.auth)
        const circleOne = this.props.auth ? <Circle percent={100 * this.props.auth.weeklyWorkoutsCompleted / this.props.auth.weeklyWorkoutGoal} strokeWidth="6" strokeColor="green" /> : <div>Loading</div>
        const oneComment = this.props.auth ? <h3 className="center white">{`${this.props.auth.weeklyWorkoutsCompleted}/${this.props.auth.weeklyWorkoutGoal}`}</h3> : <div>Loading</div>
        const circleTwo = this.props.auth ? <Circle id="circletwo" percent={100 * this.props.auth.remainingDays / 7} strokeWidth="6" strokeColor="green" /> : <div>Loading</div>
        const twoComment = this.props.auth ? <h3 className="center white">{`${this.props.auth.remainingDays}/7`}</h3> : <div>Loading</div>
        const circleThree = this.props.auth ? <Circle id="circletwo" percent={100 * this.props.auth.strikes /3} strokeWidth="6" strokeColor={"blue"} /> : <div>Loading</div>
        const threeComment = this.props.auth ? <h3 className="center white">{`${this.props.auth.strikes}/3`}</h3> : <div>Loading</div>
        const secret = this.props.auth ? <h1 className="white">{`Your secret: "${this.props.auth.secret}"`}</h1> : <div>Loading</div>
        var lastCheckin = "loading"
        if (this.props.auth) {
            if (!this.props.auth.lastCheckin) {
                lastCheckin = "You have never worked out. Ever."
            }
            else {
                lastCheckin = `You last worked out ${Math.round(Math.abs(Date.now() - this.props.auth.lastCheckin) / 3600000)}days ago`
            }
        }
        return (
            <div className="dashboard">
                <h1 className="white" id="dashboardtitle">Dashboard</h1>
                <div className="col-xs-2 border">
                    <h1 className="center white">Workouts Complete</h1>
                    {circleOne}
                    {oneComment}
                </div>
                <div className="col-xs-2 border">
                    <h1 className="center white">Days Remaining</h1>
                    {circleTwo}
                    {twoComment}
                </div>
                 <div className="col-xs-2 border">
                    <h1 className="center white">Strikes Left</h1>
                    {circleThree}
                    {threeComment}
                </div>
                <div className="col-xs-10 border">
                    {secret}
                </div>
                <div className="col-xs-10 border">
                    <h1 className="white">{lastCheckin}</h1>
                </div>
            </div>
                    )
}
}