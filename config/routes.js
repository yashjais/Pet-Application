const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('welcome to the website , ninja')
})

module.exports = router