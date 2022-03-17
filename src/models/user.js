import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, max: 25},
    lastName: {type: String, require: true, max: 25},
    email: {type: String, require: true, max: 50, index: { unique: true }},
    password: {type: String, require: true},
    role: {type: String, require: true, max: 25}

})

//const users =  mongoose.model(userCollection, userSchema);
//module.exports = users;

module.exports = mongoose.model(userCollection, userSchema);