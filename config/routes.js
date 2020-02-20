const express = require('express')
const router = express.Router()

const petsController = require('../app/controllers/petsController')

router.get('/pets', petsController.list)
router.post('/pets', petsController.create)
router.get('/pets/:id', petsController.show)
router.put('/pets/:id', petsController.update)
router.delete('/pets/:id', petsController.destroy)

module.exports = router