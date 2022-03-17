// import events

import {events} from '../config/instances.js';

const eventsRouter = express.Router();

eventsRouter.get('/', async (req, res) => {
	try{
		let eventList = await users.getAllEvents();
		res.send(eventsList);
	}
	catch {
		res.status(502).send();
	}
});

export default eventsRouter;