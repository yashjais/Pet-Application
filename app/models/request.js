const mongoose = require('mongoose')

const requestSchema = new Schema({
    user = {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    requester = {  // to which the request is going
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    services = {
        type: Schema.Types.ObjectId,
        ref: 'Services'
    },
    message = {
        type: String
    },
    status = {
        type: Boolean,
        default: false
    }
})

const Request = mongoose.model('Request', requestSchema)

module.exports = Request