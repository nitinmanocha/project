const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

const users = mongoose.model("users", userSchema);

module.exports = users;