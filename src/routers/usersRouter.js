import express from 'express';
import {users} from '../config/instances.js';

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
	try{
		let usersList = await users.getAllUsers();
		res.send(usersList);
	}
	catch {
		res.status(502).send();
	}
});

export default usersRouter;