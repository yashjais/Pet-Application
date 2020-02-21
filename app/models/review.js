const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewer : {  //  person who writes critical reviews for other person
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    reviewee : { //  one who undergoes a review
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: String,
        enum: ['1', '2', '3', '4', '5']
    },
    // service: { // which service are we rating them for or just how the owner is..
    //     type: String,
    //     ref: 'Profile.services'
    // }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review