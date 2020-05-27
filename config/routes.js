const express = require('express')
const router = express.Router()

const petsController = require('../app/controllers/petsController')
const usersController = require('../app/controllers/usersController')
const profileController = require('../app/controllers/profileController')
const reviewController = require('../app/controllers/reviewController')
const serviceController = require('../app/controllers/serviceController')
const requestController = require('../app/controllers/requestController')
const authenticateUser = require('../app/middlewares/authenticateUser')
const authorizeUser = require('../app/middlewares/authorizeUser')

router.get('/users', authenticateUser, authorizeUser.admin, usersController.users)
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/pets-all', authenticateUser, authorizeUser.admin, petsController.listAll)
router.get('/pets', authenticateUser, authorizeUser.petOwner, petsController.list)
router.post('/pets', authenticateUser, authorizeUser.petOwner, petsController.create)
router.get('/pets/:id', authenticateUser, authorizeUser.petOwner, petsController.show)
router.put('/pets/:id', authenticateUser, authorizeUser.petOwner, petsController.update)
router.delete('/pets/:id', authenticateUser, authorizeUser.petOwner, petsController.destroy)

router.get('/profile-all', authenticateUser, profileController.listAll)
router.get('/profile', authenticateUser, profileController.list)
router.post('/profile', authenticateUser, profileController.create)
router.put('/profile/:id', authenticateUser, profileController.update)
router.get('/profile/:id', authenticateUser, profileController.show)

router.get('/reviews', authenticateUser, reviewController.list)
router.post('/reviews', authenticateUser, reviewController.create)
router.get('/reviews/:id', authenticateUser, reviewController.show)
router.put('/reviews/:id', authenticateUser, reviewController.update)
router.delete('/reviews/:id', authenticateUser, reviewController.destroy)

router.get('/request', authenticateUser, requestController.list) // can be accesessed by everyone 
router.post('/request', authenticateUser, authorizeUser.petOwner, requestController.create) // can be created only by petowner
// router.get('/request/:id', authenticateUser, requestController.show) // can be accesessed by everyone/// there will be no provision of show of request
router.put('/request/:id', authenticateUser, requestController.update) // anybody can update it, let's say petsitter say yes or petowner wants to change the message body
router.get('/request/:id', authenticateUser, authorizeUser.petOwner, requestController.delete)

router.get('/services-all', authenticateUser, authorizeUser.admin, serviceController.list)
router.get('/services', authenticateUser, authorizeUser.petSitter, serviceController.list)
router.post('/services', authenticateUser, authorizeUser.admin, serviceController.create)
router.put('/services/:id', authenticateUser, authorizeUser.admin, serviceController.update) // updation is remaining
router.delete('/services/:id', authenticateUser, authorizeUser.admin, serviceController.destroy) // updation is remaining

module.exports = router