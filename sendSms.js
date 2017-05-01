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
            return users.forEach((user) => {
                if (user.weeklyWorkoutGoal > user.weeklyWorkoutsCompleted) {
                    if (user.strikes > 1) {
                        var transporter = nodemailer.createTransport({
                            service: 'Outlook',
                            auth: {
                                user: 'graceshopper@outlook.com', // Your email id
                                pass: 'ShopperGrace' // Your password
                            }
                        });
                        var mailOptions = {
                            from: 'graceshopper@outlook.com', // sender address
                            to: user.email, // list of receivers
                            subject: 'Embarassment Approaches', // Subject line
                            text: `Hey ${user.name} you missed your workout goal this week. One strike closer to embarassment.`
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Message sent: ');
                            };
                        })
                        user.update({
                            strikes: user.strikes - 1






                        })
                    }
                    else {
                        return client.messages.create({
                            to: user.recipientNumber,
                            from: 14798020374,
                            body: user.secret
                        }, function (err, message) {
                            if (err) {
                                console.log("uydasdasd")
                            }
                            else {
                                return user.destroy()
                            }
                        })
                    }
                }
            })
        })
}
    , 12000)


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