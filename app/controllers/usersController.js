const User = require('../models/user')
const pick = require('lodash/pick')

module.exports.register = (req, res) => {
    const body = pick(req.body, ['username', 'email', 'mobile','password', 'role'])
    const user = new User(body)
    user.save()
        .then(user => res.send(user))
        .catch(err => res.send(err))
}

module.exports.login = (req, res) => {
    const body = pick(req.body, ['email', 'password'])
    User.findByCredentials(body.email, body.password)
        .then(user => {
            return user.generateToken()
        })
        .then(token => {
            res.setHeader('x-auth', token).send({})
        })
        .catch(err => res.send(err))
}

module.exports.account = (req, res) => {
    const {user} = req
    res.send(pick(user, ['_id', 'username', 'mobile', 'email', 'role']))
}

module.exports.logout = (req, res) => {
    const { token, user } = req
    User.findByIdAndUpdate(user._id, { $pull: {tokens: {token: token}}})
    .then(function() {
        res.send({ notice: 'Successfully logged out'})
    })
    .catch(function(err) {
        res.send(err)
    })
}