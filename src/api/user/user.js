const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, min: 6, max: 12, required: true}
})
const User = mongoose.model('User', userSchema)
module.exports = {User, userSchema}