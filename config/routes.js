const express = require('express')
const router = express.Router()

const petsController = require('../app/controllers/petsController')
const usersController = require('../app/controllers/usersController')
const profileController = require('../app/controllers/profileController')
const reviewController = require('../app/controllers/reviewController')
const serviceController = require('../app/controllers/serviceController')
const authenticateUser = require('../app/middlewares/authenticateUser')
const authorizeUser = require('../app/middlewares/authorizeUser')

router.get('/users', authenticateUser, authorizeUser.admin, usersController.users)
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account) 
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/pets-all', authenticateUser, authorizeUser.admin, petsController.listAll)
router.get('/pets',authenticateUser, authorizeUser.petOwner, petsController.list)
router.post('/pets',authenticateUser, authorizeUser.petOwner, petsController.create)
router.get('/pets/:id',authenticateUser, authorizeUser.petOwner, petsController.show)
router.put('/pets/:id',authenticateUser, authorizeUser.petOwner, petsController.update)
router.delete('/pets/:id',authenticateUser, authorizeUser.petOwner, petsController.destroy)

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

router.get('/services-all', authenticateUser, authorizeUser.admin, serviceController.list)
router.get('/services', authenticateUser, authorizeUser.petSitter, serviceController.list)
router.post('/services', authenticateUser, authorizeUser.admin, serviceController.create)
router.put('/services/:id', authenticateUser, authorizeUser.admin, serviceController.update)
router.delete('/services/:id', authenticateUser, authorizeUser.admin, serviceController.destroy)

module.exports = router