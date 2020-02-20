const Pet = require('../models/pet')
const pick = require('lodash/pick')

module.exports.list = (req, res) => {
    Pet.find() 
        .then(pets => res.send(pets))
        .catch(err => res.send(err))
}

module.exports.create = (req, res) => {
    const body = pick(req.body, ['name', 'breed', 'gender', 'neutered', 'vaccinated', 'microchipped'])
    const pet = new Pet(body)
    pet.save()
        .then(pet => res.send(pet))
        .catch(err => res.send(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Pet.findById(id)
    .then(pet => {
        if(pet) {
            res.send(pet)
        } else {
            res.send({})
        }
    })
    .catch(err => res.send(err))
}

module.exports.update = (req, res) => {
    const body = pick(req.body, ['name', 'breed', 'gender', 'neutered', 'vaccinated', 'microchipped'])
    const id = req.params.id
    Pet.findByIdAndUpdate(id, body, {runValidators: true, new: true})
        .then(pet => {
            if(pet) {
                res.send(pet)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Pet.findByIdAndDelete(id)
        .then(pet => {
            if(pet) {
                res.send(pet)
            } else {
                res.send({})
            }
        })
        .catch(err => res.send(err))
}