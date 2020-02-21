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
    services: {
        type: [String],
    },
    // images: {
    //     type: [String]
    // },
    location: {
        type: String
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    // availability: { // is he available for a given time in future
    //     type: 
    // }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile