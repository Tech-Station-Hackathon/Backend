import { events } from '../config/instances.js';
import express from 'express';
import isAdmin from '../middlewares/isAdmin.js';

const eventsRouter = express.Router();

eventsRouter.get('/', async (req, res) => {
	try{
		let eventsList = await events.getAllEvents();
		res.send(eventsList);
	} catch (error) {
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

eventsRouter.post('/', isAdmin, async (req, res) => {
	try{
		await events.addEvent(
			req.body.title,
			req.body.description,
			req.body.thumbnail,
			req.body.stream,
			req.body.date,
			req.body.isOnline,
			req.body.isPresential
		);
		res.send();
	} catch (error){
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

eventsRouter.get('/presentials', async (req, res) => {
	try{
		let eventsList = await events.getAllEvents();
		res.send(eventsList.filter(event => event.isPresential));
	} catch(error) {
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

eventsRouter.get('/online', async (req, res) => {
	try{
		let eventsList = await events.getAllEvents();
		res.send(eventsList.filter(event => event.isOnline));
	} catch(error) {
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

eventsRouter.get('/historical', async (req, res) => {
	try{
		let eventsList = await events.getAllEvents();
		res.send(eventsList.filter(event => new Date(event.date) < new Date()));
	} catch(error) {
		res.status(500).send({
			error: 'Internal Server Error',
			message: error
		});
	}
});

export default eventsRouter;