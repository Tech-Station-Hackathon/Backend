export default function isAuthenticated(req, res, next){
	if(req.headers.token){
		next();
	}else{
		res.status(401).send({
			error: 'Unauthorized',
			message: 'client failed to authenticate with the server'
		});
	}
}