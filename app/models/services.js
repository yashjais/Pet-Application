const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },  
    service: {
        type: String,
        required: true
    }
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service