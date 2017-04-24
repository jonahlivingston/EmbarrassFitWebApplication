'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  name: Sequelize.STRING,
  weeklyWorkoutGoal: Sequelize.INTEGER,
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER,
  secret: Sequelize.TEXT,
  recipientNumber: Sequelize.STRING,
  weeklyWorkoutsCompleted: Sequelize.INTEGER,
  remainingDays:Sequelize.INTEGER
},{
  classMethods:{
    IncrementDay: function() {
      this.findAll()
      .then((Users)=>{
        return Users.forEach((user)=>{
          if (user.remainingDays!==0){
            return user.decrement(['remainingDays'], { by: 1 })
          }
          else{
            return user.update({
              remainingDays:7,
              weeklyWorkoutsCompleted:0
            })
          }
        })
      })
      .then(()=>{
      })
      .catch((err)=>{console.error(err)})
    }
  }
})

 
module.exports = User
