import express from 'express';
import { eventsubscriptions } from '../config/instances.js';
import {getIDInSession} from '../tools/token.js';

const eventsubscriptionsRouter = express.Router();

eventsubscriptionsRouter.get('/:eventId', async (req, res) => {
	try{
		let eventSubscriptionList = await eventsubscriptions.getEventSubscriptionByID(req.params.eventId);
		res.send(eventSubscriptionList);
	}
	catch (error){
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

eventsubscriptionsRouter.post('/', async(req, res) =>{
	try{
		await eventsubscriptions.addEventSubscription(
			req.body.eventId,
			getIDInSession(req.headers.token),
			req.body.accessType
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

export default eventsubscriptionsRouter;