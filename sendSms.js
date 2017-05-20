const authToken = require("./twilio").authToken
const SID = require("./twilio").SID
const client = require("twilio")(SID, authToken)
var testNumber = 1;
const User = require('APP/db/models/user')
const Sequelize = require("sequelize")
var nodemailer = require('nodemailer');

///This function is what sends Text messages if users don't workout enough
///This function runs once per day

setInterval(function () {
    
    //Moves the day forward by one for all users
    User.IncrementDay()

    //Find the users who have no days left that week to complete workouts
    User.findAll({
        where: {
            remainingDays: 0
        }
    })
        .then((users) => {
            return users.forEach((user) => {

                //look at users who haven't completed enough workouts
                if (user.weeklyWorkoutGoal > user.weeklyWorkoutsCompleted) {

                    //look at users who have strikes left and send them an emailwarning
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

                        //remove a strike from the user
                        user.update({
                            strikes: user.strikes - 1
                        })
                    }
                    // if the user has no strikes send them a text message using twilio
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

// module.exports = "a"