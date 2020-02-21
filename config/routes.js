const express = require('express')
const router = express.Router()

const petsController = require('../app/controllers/petsController')
const usersController = require('../app/controllers/usersController')
const authenticateUser = require('../app/middlewares/authenticateUser')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account) 
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/pets', petsController.list)
router.post('/pets', petsController.create)
router.get('/pets/:id', petsController.show)
router.put('/pets/:id', petsController.update)
router.delete('/pets/:id', petsController.destroy)

module.exports = router