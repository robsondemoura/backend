const _ = require('lodash')


module.exports = (req, res, next) =>{
    const budle = res.locals.bundle

    if(budle.errors){
        const errors = parseErrors(budle.errors)
        res.status(500).json({errors})
    } else{
        next()
    }

}
const parseErrors = (nodeRestfulErrors) =>{
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}