import { createToken, getIDInSession } from '../tools/token.js';
import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { users } from '../config/instances.js';

const usersRouter = express.Router();

usersRouter.get('/', isAuthenticated, async (req, res) => {
	try{
		const id = getIDInSession(req.headers.token);
		const user = await users.getUserByID(id);
		delete user[0].password;
		res.send({user:user[0]});
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
		await users.addUser(
			req.body.name,
			req.body.lastname,
			req.body.age,
			req.body.avatar,
			req.body.email,
			req.body.password,
			req.body.segment
		);
		res.send();
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
		if(await users.checkUser(req.body.email, req.body.password)){
			const user = await users.getUserByEmail(req.body.email);
			const token = createToken({id:user[0]._id});
			res.send({
				token,
				id: user[0]._id
			});
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