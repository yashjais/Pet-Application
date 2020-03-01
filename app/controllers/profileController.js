const Profile = require('../models/profile')
const pick = require('lodash/pick')

module.exports.listAll = (req, res) => {
    Profile.find().populate('user',['username', 'email', 'mobile', 'role'])
        .then(profile => res.send(profile))
        .catch(err => res.send(err))
}

module.exports.list = (req, res) => {
    Profile.findOne({user: req.user._id})
        .then(profile => {
            if(profile) {
                res.send(profile)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}

module.exports.create = (req, res) => {
    const { role } = req.user
    if(role == 'petowner') {
        const body = pick(req.body, ['user', 'bio', 'avatar', 'location', 'reviews'])
        const profile = new Profile(body)
        profile.save()
            .then(profile => res.send(pick(profile, ['_id', 'user', 'bio', 'avatar', 'location', 'reviews'])))
            .catch(err => res.send(err))

    } else if(role == 'petsitter') {
        const body = pick(req.body, ['user', 'bio', 'avatar', 'location', 'reviews', 'services'])
        const profile = new Profile(body)
        profile.save()
            .then(profile => res.send(pick(profile, ['_id', 'user', 'bio', 'avatar', 'location', 'reviews', 'services'])))
            .catch(err => res.send(err))

    } else {
        const body = pick(req.body, ['user', 'bio', 'avatar', 'location'])
        const profile = new Profile(body)
        profile.save()
            .then(profile => res.send(pick(profile, ['_id', 'user', 'bio', 'location'])))
            .catch(err => res.send(err))
    }
}

module.exports.update = (req, res) => {
    const { role } = req.user
    if(role == 'petowner') {
        const body = pick(req.body, ['bio', 'avatar', 'location'])
        const id = req.params.id
        Profile.findOneAndUpdate({_id: id, user: req.user._id}, body, {runValidators: true, new: true})
            .then(profile => {
                if(profile) {
                    res.send(profile)
                } else {
                    res.send({})
                }
            })
            .catch(err => res.send(err))

    } else if(role == 'petsitter') {
        const body = pick(req.body, ['bio', 'avatar', 'location', 'services'])
        const id = req.params.id
        Profile.findOneAndUpdate({_id: id, user: req.user._id}, body, {runValidators: true, new: true})
            .then(profile => {
                if(profile) {
                    res.send(profile)
                } else {
                    res.send({})
                }
            })
            .catch(err => res.send(err))

    } else {
        const body = pick(req.body, ['bio', 'avatar', 'location'])
        const id = req.params.id
        Profile.findOneAndUpdate({_id: id, user: req.user._id}, body, {runValidators: true, new: true})
            .then(profile => {
                if(profile) {
                    res.send(profile)
                } else {
                    res.send({})
                }
            })
            .catch(err => res.send(err))
    }
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Profile.findOne({_id: id, user: req.user._id})
        .then(profile => {
            if(profile) {
                res.send(profile)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}