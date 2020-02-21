const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pick = require('lodash/pick')

const Schema = mongoose.Schema

const userSchema  = new Schema({
    username: {
        type: String,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isAlphanumeric(value)
            },
            message: function() {
                return 'username format is not valid'
            }
        }
    },
    mobile: {
        type: String,
        unique: true,
        minlength: 10,
        maxlength: 10,
        validate: {
            validator: function(value) {
                return validator.isNumeric(value)
            },
            message: function() {
                return 'mobile format is not valid'
            }
        }
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value)
            },
            message: function() {
                return 'email format is not valid'
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 128
    },
    role: {
        type: String,
        enum: ['petsitter', 'petowner', 'admin'],
        required: true
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

userSchema.statics.findByCredentials = function(email, password) {
    const User = this
    return User.findOne({email})
            .then(function (user) {
                if (!user) {
                    return Promise.reject('invalid email / password')
                } else {
                    // console.log(user)
                    return bcryptjs.compare(password, user.password)
                        .then(function (result) {
                            if (result) {
                                return Promise.resolve(user)
                            } else {
                                return Promise.reject('invalid email / password')
                            }
                        })
                        .catch(function (err) {
                            return Promise.reject(err)
                        })
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
}

userSchema.methods.generateToken = function() {
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date()),
        role: user.role
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({token})
    return user.save()
            .then(user => {
                const body = pick(user, ['username', 'mobile', 'email', 'role', 'profile'])
                body.token = token
                return Promise.resolve(body)
            })
            .catch(err => Promise.reject(err))
}

userSchema.statics.findByToken = function(token) {
    const User = this
    let tokenData
    try{
        tokenData = jwt.verify(token, 'jwt@123')
    } catch(err) {
        return Promise.reject(err)
    }
    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
}

userSchema.pre('save', function(next) {
    const user = this
    if(user.isNew) {
        bcryptjs.genSalt(10)
            .then(salt => {
                return bcryptjs.hash(user.password, salt)
            })
            .then(encPass => {
                user.password = encPass
                next()
            })
            .catch(err => Promise.reject(err))
    } else {
        next()
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
