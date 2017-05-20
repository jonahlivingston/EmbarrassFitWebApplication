'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) => 
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	
	//creates a user
	.post('/', (req, res, next) =>{
		User.create(req.body)
		.then((user)=>{
			res.status(201).json(user)
		})
		.catch((err)=>{console.log("thisisit",err)})
	})
	
	//Increments a users completed workouts in the event of a valid checkin
	.put("/:id/workout",(req,res,next)=>
		User.findById(req.params.id)
		.then((user)=>{
			return user.increment(['weeklyWorkoutsCompleted'], { by: 1 })
		})
		.then((updated)=>{
			console.log(updated)
			res.sendStatus(200)
		})
		.catch(next)
	)

	//get a user by email
	.get("/:email",(req,res,next)=>{
		User.findOne({where:{
			email:req.params.email
		}})
		.then((user)=>{
			res.send(user)
		})
		.catch(next)
	})

	//set the last checkin tiem for a user and ensure its a valid time
	.put("/checkin",(req,res,next)=>{
		var currentDate = Date.now();
		User.findById(req.body.id)
		.then((user)=>{
			if (user.lastCheckin===null){
				return user.update({
					lastCheckin: currentDate.toString(),
					weeklyWorkoutsCompleted:user.weeklyWorkoutsCompleted+1
				})
			}
			else{
				//ensures that it has been a reasonable time since last checkin 
				var difference = Math.abs(Number.parseInt(user.lastCheckin-currentDate))
				if (difference>21600000){
					return user.update({
						lastCheckin:currentDate.toString(),
						weeklyWorkoutsCompleted:user.weeklyWorkoutsCompleted+1
					})
				}
				else{
					return "false"
				}
			}
		})
		.then((response)=>{
			if (response==="false"){
				res.send("You must wait at least 6 hours before checking in again.")
			}
			else{
				res.send("Success")
			}
		}).catch(next)
	})
