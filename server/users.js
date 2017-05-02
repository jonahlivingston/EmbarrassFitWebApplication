'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) => 
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	
	.post('/', (req, res, next) =>{
		User.create(req.body)
		.then((user)=>{
			console.log("the user looks like",user)
			res.status(201).json(user)
		})
		.catch((err)=>{console.log("thisisit",err)})
	})
	
	
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

	.get("/:email",(req,res,next)=>{
		User.findOne({where:{
			email:req.params.email
		}})
		.then((user)=>{
			console.log("judah")
			res.send(user)
		})
		.catch(next)
	})

	.put("/checkin",(req,res,next)=>{
		var currentDate = Date.now();
		// console.log("thisisdate",currentDate,typeof(currentDate))
		console.log("bodayy",req.body)
		User.findById(req.body.id)
		.then((user)=>{
			// return user.set({name:"hey"}).save()
			if (user.lastCheckin===null){
				return user.update({
					lastCheckin: currentDate.toString(),
					weeklyWorkoutsCompleted:user.weeklyWorkoutsCompleted+1
				})
			}
			else{
				var difference = Math.abs(Number.parseInt(user.lastCheckin-currentDate))
				console.log(difference)
				// if (difference>21600000){
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
			// user.update({lastDate:req.body.date})
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

	// .get('/:id', mustBeLoggedIn, (req, res, next) => 
	// 	User.findById(req.params.id)
	// 	.then(user => res.json(user))
	// 	.catch(next))