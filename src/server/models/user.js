import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, max: 25},
    lastName: {type: String, require: true, max: 25},
    email: {type: String, require: true, max: 50, index: { unique: true }},
    password: {type: String, require: true},
    role: {type: String, require: true, max: 25}

})

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

module.exports = mongoose.model(userCollection, userSchema);

