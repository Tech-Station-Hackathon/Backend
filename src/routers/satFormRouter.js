// import satForms

import {satForms} from '../config/instances.js';

const satFormsRouter = express.Router();

satFormsRouter.get('/', async (req, res) => {
	try{
		let satFormList = await satForms.getAllsatForms();
		res.send(satFormList);
	}
	catch {
		res.status(502).send();
	}
});

export default satFormsRouter;