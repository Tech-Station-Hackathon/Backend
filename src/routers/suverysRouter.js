import express from 'express';
import isManager from '../middlewares/isManager.js';
import {suverys} from '../config/instances.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const suverysRouter = express.Router();

suverysRouter.get('/:eventId', isManager, async (req, res) => {
	try{
		let suverysList = await suverys.getAllSurveys();
		res.send(suverysList.filter(suvery => suvery.idEvent == req.params.eventId));
	}
	catch (error){
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

suverysRouter.post('/', isAuthenticated, async (req, res) => {
	try{
		suverys.addSurvey(
			req.body.name,
			req.body.lastname,
			req.body.email,
			req.body.idEvent,
			req.body.feedback,
			req.body.cmbSat,
			req.body.cmbRate,
			req.body.cmbRecomm
		);
		res.send();
	}
	catch (error){
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

export default suverysRouter;