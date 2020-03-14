const Request = require('../models/request')
const pick = require('lodash/pick')

module.exports.list = (req, res) => {
    Request.find()
        .then(req => res.send(req))
        .catch(err => res.send(err))
}
module.exports.create = (req, res) => {
    const body = pick(req.body, ['user', 'receiver', 'services', 'message', 'status'])
    const request = new Request(body)
    request.save()
        .then(req => res.send(req))
        .catch(err => res.send(err))
}
module.exports.show = (req, res) => {
    Request.find()
        .then(req => res.send(req))
        .catch(err => res.send(err))
}
module.exports.update = (req, res) => {
    Request.find()
        .then(req => res.send(req))
        .catch(err => res.send(err))
}
module.exports.delete = (req, res) => {
    Request.find()
        .then(req => res.send(req))
        .catch(err => res.send(err))
}