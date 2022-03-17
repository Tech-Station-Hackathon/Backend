import Event from '../models/event.js';
import User from '../models/user.js';
import 'dotenv/config';

export const events = new Event(process.env.MONGO_URL);	// Event Manager Instance
export const users = new User(process.env.MONGO_URL);		// User Manager Instance
