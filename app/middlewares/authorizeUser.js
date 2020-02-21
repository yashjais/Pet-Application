module.exports.petOwner = (req, res, next) => {
    const { role } = req.user
    console.log(req.user)
    console.log(role)
    if(role != 'petsitter') {
        next()
    } else {
        res.status('403').send({notice: 'you are not authorized to see this page'})
    }
}

module.exports.admin = (req, res, next) => {
    const { role } = req.user
    console.log(req.user)
    console.log(role)
    if(role == 'admin') {
        next()
    } else {
        res.status('403').send({notice: 'you are not authorized to see this page'})
    }
}
