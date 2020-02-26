const Service = require('../models/services')
const pick = require('lodash/pick')

module.exports.list = (req, res) => {
    Service.find() 
        .then(service => res.send(service))
        .catch(err => res.send(err))
}

module.exports.create = (req, res) => {
    const body = pick(req.body, ['service'])
    body.user = req.user._id
    const service = new Service(body)
    service.save()
        .then(service => {
            // const body = {}
            // body._id = service._id
            // body.service = service.servise
            res.send(service)
        })
        .catch(err => res.send(err))
}

module.exports.update = (req, res) => {
    const body = pick(req.body, ['service'])
    const id = req.params.id
    Service.findByIdAndUpdate(id, body, {runValidators: true, new: true})
        .then(service => {
            if(service) {
                res.send(service)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Service.findByIdAndDelete(id)
        .then(service => {
            if(service) {
                res.send(service)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}