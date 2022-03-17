import bcrypt from 'bcrypt';
import MongoManager from '../dao/mongoManager.js';

export default class User{
	constructor(file = null, db = 'hackathon') {
		this.db = new MongoManager(file, db, 'users');
	}

	// return all users
	getAllUsers(){
		this.db.readData()
			.then(data => {
				return data;
			})
			.catch( err => {
				return err;
			});
	}

	// create new user
	addUser(name, lastname, age, avatar, email, password, role){
		let user = {
			name,
			lastname,
			age,
			avatar,
			email,
			password: bcrypt.hashSync(password, 2),
			role
		};

		return this.db.writeData(user);
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
		this.db.deleteByID(userID);
	}

	// get user by id
	getUserByID(userID){
		return this.db.readDataByID(userID);
	}

	// get user by email
	getUserByEmail(email){
		return this.db.readDataByFilter({email});
	}
}