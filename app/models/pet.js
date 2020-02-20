const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    neutered: {
        type: Boolean,
        default: false
    },
    vaccinated: {
        type: Boolean,
        default: false
    },
    microchipped: {
        type: Boolean,
        default: false
    }
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet