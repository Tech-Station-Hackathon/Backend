import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { users } from '../config/instances.js';

const usersRouter = express.Router();

usersRouter.get('/', isAuthenticated, async (req, res) => {
	try{
		let usersList = await users.getAllUsers();
		res.send(usersList);
	}
	catch (error) {
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

usersRouter.post('/register', async (req, res) => {
	try{
		let newUser = await users.addUser(
			req.body.name,
			req.body.lastname,
			req.body.age,
			req.body.avatar,
			req.body.email,
			req.body.password
		);
		res.send(newUser);
	}
	catch (error) {
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

usersRouter.post('/auth',async (req, res) => {
	try{
		if(await users.checkUser(req.body.email,req.body.password)){
			const user = await users.getUserByEmail(req.body.email);
			const token = user[0]._id;
			res.send({token});
		}else{
			res.status(401).send({
				error: 'Internal Server Error',
				message: 'Incorrect username and password'
			});
		}
	}
	catch (error) {
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

export default usersRouter;