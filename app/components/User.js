import React, { Component } from "react"
import { Circle } from 'rc-progress'
export default class User extends Component {
    render() {
        console.log(this.props.auth)
        const circleOne = this.props.auth ? <Circle percent={100 * this.props.auth.weeklyWorkoutsCompleted / this.props.auth.weeklyWorkoutGoal} strokeWidth="6" strokeColor="green" /> : <div>Loading</div>
        const oneComment = this.props.auth ? <h3 className="center">{`${this.props.auth.weeklyWorkoutsCompleted}/${this.props.auth.weeklyWorkoutGoal}`}</h3> : <div>Loading</div>
        const circleTwo = this.props.auth ? <Circle id="circletwo" percent={100 * this.props.auth.remainingDays / 7} strokeWidth="6" strokeColor="green" /> : <div>Loading</div>
        const twoComment = this.props.auth ? <h3 className="center">{`${this.props.auth.remainingDays}/7`}</h3> : <div>Loading</div>
        const secret = this.props.auth ? <h1>{`Your secret: "${this.props.auth.secret}"`}</h1> : <div>Loading</div>
        var lastCheckin = "loading"
        if (this.props.auth) {
            if (!this.props.auth.lastCheckin) {
                lastCheckin = "You have never worked out. Ever."
            }
            else {
                lastCheckin = `You last worked out ${Math.abs(Date.now() - this.props.auth.lastCheckin) / 3600000}days ago`
            }
        }
        return (
            <div>
                <div className="col-xs-4 border">
                    <h1 className="center">Workouts Complete</h1>
                    {circleOne}
                    {oneComment}
                </div>
                <div className="col-xs-4 border">
                    <h1 className="center">Days Remaining</h1>
                    {circleTwo}
                    {twoComment}
                </div>
                <div className="col-xs-10 border">
                    {secret}
                </div>
                <div className="col-xs-10 border">
                    <h1>{lastCheckin}</h1>
                </div>
            </div>
                    )
}
}