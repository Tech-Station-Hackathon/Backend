import express from 'express';
import eventsRouter from './routers/eventsRouter.js';
import usersRouter from './routers/usersRouter.js';

const routes = express.Router();

routes.use('/api/users/', usersRouter);
routes.use('/api/events/', eventsRouter);

routes.get('*', function(req, res){
	res.status(404).send({
		error: 'Not Found',
		message: 'the requested resource does not exist'
	});
});

export default routes;