import express from 'express';

const routes = express.Router();

routes.use('/', (req, res) => {
	res.send('Hello World!');
});

routes.get('*', function(req, res){
	res.status(404).send({
		error: 'Not Found',
		message: 'the requested resource does not exist'
	});
});

export default routes;