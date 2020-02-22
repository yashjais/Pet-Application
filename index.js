const express = require('express')
const setUpDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')

const port = 3020
const app = express()
setUpDB()

const corsOptions = {
    exposedHeaders: 'x-auth',
};
app.use(cors(corsOptions))

app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('listening on the port', port)
})

