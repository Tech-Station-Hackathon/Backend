import express from 'express';
import {eventsubscriptions} from '../config/instances.js';

const eventsubscriptionsRouter = express.Router();

eventsubscriptionsRouter.get('/', async (req, res) => {
	try{
		let eventSubscriptionList = await eventsubscriptions.getEventSubscriptionByID();
		res.send(eventSubscriptionList);
	}
	catch (error){
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

export default eventsubscriptionsRouter;