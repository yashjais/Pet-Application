const pick = require('lodash/pick')
const Review = require('../models/review')

module.exports.list = (req, res) => {
    Review.findOne({ reviewer: req.user._id})
        .then(review => {
            if(review) {
                res.send(review)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))    
}

module.exports.create = (req, res) => {
    const body = pick(req.body, ['reviewer', 'title', 'body', 'reviewee', 'rating'])
    body.user = req.user._id
    const review = new Review(body)
    review.save()
        .then(review => res.send(review))
        .catch(err => res.send(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Review.findOne({ _id: id, reviewer: req.user._id})
        .then(review => {
            if(review) {
                res.send(review)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = pick(req.body, ['title', 'body', 'rating']) 
    Review.findOneAndUpdate({_id: id, reviewer: req.user._id}, body, {runValidators: true, new: true}) 
        .then(review => {
            if(review) {
                res.send(review)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Review.findOneAndDelete({_id: id, reviewer: req.user._id})
        .then(review => {
            if(review) {
                res.send(review)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}