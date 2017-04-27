'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const db = require('APP/db')
const OAuth = require ("./oauth")


const User = db.define('users', {
  name: Sequelize.STRING,
  weeklyWorkoutGoal: Sequelize.INTEGER,
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER,
  secret: Sequelize.TEXT,
  recipientNumber: Sequelize.STRING,
  weeklyWorkoutsCompleted: Sequelize.INTEGER,
  remainingDays:Sequelize.INTEGER,
  ///make email validation
    email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    }
},
password_digest: Sequelize.STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
password: Sequelize.VIRTUAL
}
,

{
  hooks:{
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
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
  },
  instanceMethods: {
      authenticate(plaintext) {
        return new Promise((resolve, reject) =>
          bcrypt.compare(plaintext, this.password_digest,
            (err, result) =>
              err ? reject(err) : resolve(result))
        )
      }
    }
})

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)
  return new Promise((resolve, reject) =>
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) return reject(err)
      user.set('password_digest', hash)
      resolve(user)
    })
  )
}
module.exports = User
module.exports.associations = User.hasMany(OAuth)

