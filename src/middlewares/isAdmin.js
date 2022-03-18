import { getIDInSession } from '../tools/token.js';
import { users } from '../config/instances.js';

export default async function isAdmin(req, res, next){
	try {
		const id = getIDInSession(req.headers.token);
		const user = await users.getUserByID(id);
		if(user[0].role === 'admin'){
			next();
		}else{
			res.status(403).send({
				error: 'Forbidden',
				message: 'The user does not have the permissions to perform this action'
			});
		}
	} catch(error) {
		res.status(409).send({
			error: 'Unauthorized',
			message: error
		});
	}

}