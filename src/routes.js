import express from 'express';

const routes = express.Router();

routes.use('/', (req, res) => {
	res.send('Hello World!');
});

export default routes;