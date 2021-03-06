const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    bio: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    services: [{
        type: Schema.Types.ObjectId
    }],
    // images: {
    //     type: [String]
    // },
    location: {
        type: String,
        enum: ['Pune', 'Bangalore', 'Chennai']
    },
    // reviews: [{ // not required here
    //     type: Schema.Types.ObjectId,
    //     ref: 'Review'
    // }],
    // availability: { // is he available for a given time in future
    //     type: 
    // }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile