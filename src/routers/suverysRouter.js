import express from 'express';
import {suvery} from '../config/instances.js';

const suverysRouter = express.Router();

suverysRouter.get('/', async (req, res) => {
	try{
		let satFormList = await suvery.getAllSurveys();
		res.send(satFormList);
	}
	catch (error){
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

export default suverysRouter;