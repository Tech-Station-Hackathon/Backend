import bcrypt from 'bcrypt';
import MongoManager from '../dao/mongoManager.js';
import { ObjectId } from 'mongodb';

export default class User{
	constructor(file = null, db = 'hackathon') {
		this.db = new MongoManager(file, db, 'users');
	}

	// return all users
	getAllUsers(){
		return this.db.readData();
	}

	// create new user
	async addUser(name, lastname, age, avatar, email, password, segment , role='user'){
		let users = await this.getUserByEmail(email);
		if ( users.length < 1){
			let user = {
				name,
				lastname,
				age,
				avatar,
				email,
				password: bcrypt.hashSync(password, 2),
				segment,
				role
			};

			return this.db.writeData(user);
		} else {
			throw Error('The mail is already being used');
		}

	}

	// chec password to user id
	async checkUser(email, password){
		try {
			let user = await this.getUserByEmail(email);
			return await bcrypt.compare(password, user[0].password);
		}
		catch {
			return false;
		}

	}

	// delete user by id
	removeUserById(userID){
		this.db.deleteByID(ObjectId(userID));
	}

	// get user by id
	getUserByID(userID){
		return this.db.readDataByID(ObjectId(userID));
	}

	// get user by email
	getUserByEmail(email){
		return this.db.readDataByFilter({email});
	}
}