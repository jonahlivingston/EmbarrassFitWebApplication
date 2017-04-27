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
		.catch(next)
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

	.get('/:id', mustBeLoggedIn, (req, res, next) => 
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))