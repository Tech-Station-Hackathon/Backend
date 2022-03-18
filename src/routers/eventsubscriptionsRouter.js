import express from 'express';
import { eventsubscriptions } from '../config/instances.js';

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

export default eventsubscriptionsRouter;