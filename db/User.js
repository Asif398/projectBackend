const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    username:String,
    password:String
});

my name is asif raza

module.exports = mongoose.model("User",userSchema);