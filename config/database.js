const mongoose = require('mongoose')

const setUPDB = () => {
    mongoose.connect('mongodb://localhost:27017/pet-application',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false, useCreateIndex: true })
        .then(res => console.log('connected to db'))
        .catch(err => console.log(err))
}

module.exports = setUPDB