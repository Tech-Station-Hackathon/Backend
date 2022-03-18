import express from 'express';
import eventsRouter from './routers/eventsRouter.js';
import eventsubscriptionsRouter from './routers/eventsubscriptionsRouter.js';
import SuverysRouter from './routers/suverysRouter.js';
import usersRouter from './routers/usersRouter.js';

const routes = express.Router();

routes.use('/api/users/', usersRouter);
routes.use('/api/events/', eventsRouter);
routes.use('/api/suverrys/', SuverysRouter);
routes.use('/api/subscriptions/', eventsubscriptionsRouter);

routes.get('*', function(req, res){
	res.status(404).send({
		error: 'Not Found',
		message: 'the requested resource does not exist'
	});
});

export default routes;