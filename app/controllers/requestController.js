const Request = require('../models/request')
const pick = require('lodash/pick')

module.exports.list = (req, res) => {
    // if the user is petowner, he will be the reciever in the request model
    const role = req.user.role
    console.log(role)
    if (role == "petsitter") {
        Request.find({ receiver: req.user._id })
            .then(req => res.send(req))
            .catch(err => res.send(err))
    } else if (role == "petowner") {
        Request.find({ user: req.user._id })
            .then(req => res.send(req))
            .catch(err => res.send(err))
    } else {
        // this is the admin
        Request.find()
            .then(req => res.send(req))
            .catch(err => res.send(err))
    }
}

module.exports.create = (req, res) => {
    const body = pick(req.body, ['user', 'receiver', 'services', 'message', 'status'])
    const request = new Request(body)
    request.save()
        .then(req => res.send(req))
        .catch(err => res.send(err))
}

module.exports.update = (req, res) => {
    const role = req.user.role
    const _id = req.params.id
    Request.findOne({ _id })
        .then(req => {
            if (req.status == "true") {
                res.send("can't be updated")
            } else {
                // check for the owner
            }
            // res.send(req)
        })
        .catch(err => res.send(err))
    if (role == "petsitter") {
        // can only update 
    }
}

module.exports.delete = (req, res) => {
    Request.find()
        .then(req => res.send(req))
        .catch(err => res.send(err))
}