const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login : String,
    avatar_url : String,
    company : String,
    name : String,
    public_repos : Number,
    followers : Number,
    bio : String,
},
{
    timestamps : true,
});

module.exports = mongoose.model('User', userSchema);