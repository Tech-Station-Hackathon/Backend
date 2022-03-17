const mongoose = require('mongoose');
//import mongoose from 'mongoose'
const model = require('./models/user');
//import * as model from './models/user.js'

CRUD()

async function CRUD () {
    try{
        //connection to database
        const URL = 'mongodb://localhost:${PORT}'
        let rta = await mongoose.connect(URL, {});   
        //console.log(resp);
        console.log('Base de datos conectada');

        //create
        console.log('Create');
        const user = {name: 'Juan', lastName: 'Liviero', email: 'juanliviero@gmail.com', user:'juanliviero', password: '123'}
        const userSaveModel = model(user);
        let userSave = await userSaveModel.save();
        console.log(userSave);

        //read
        console.log('Read all');
        let users = await model.find({});
        console.log(users);

        //update
        console.log('update');
        let userUpdate = await model.updateOne ({email: 'juanmliviero@gmail.com'}, { $set: {password: '12345'}});
        console.log(userUpdate);

        //delete
        console.log('Delete');
        let userDelete = await model.deleteOne({email: 'nancybarea@gmail.com'})
        console.log(userDelete);

    }    
    catch(error){
        console.log(`error en CRUD: ${error}`);
        //throw new Error('Unable to connect');
    }
}