const authToken = '1fde07aad6f3da36a62515fbab20f936'
const SID = "ACf1034882e6ff1d71799127ffc9413454"
const client = require("twilio")(SID, authToken)
var testNumber = 1;
const User = require('APP/db/models/user')
const Sequelize = require("sequelize")

setInterval(function () {
    User.IncrementDay()

    User.findAll({
        where: {
            remainingDays: 0
        }
    })
        .then((users) => {
            console.log(users)
            users.forEach((user) => {
                if (user.weeklyWorkoutGoal >= user.weeklyWorkoutsCompleted) {
                    client.messages.create({
                        to: user.recipientNumber,
                        from: 14798020374,
                        body: user.secret
                    }, function (err, message) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log(message)
                        }
                    })
                }
            })
        })
}
    , 5000)


//     client.messages.create({
//         to: 4159107352,
//         from: 14798020374,
//         body: "test secret" + testNumber++
//     }, function (err, message) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log(message)
//         }
//     })
// }, 5000)

module.exports = "a"