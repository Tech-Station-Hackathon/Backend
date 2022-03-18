import Event from '../models/event.js';
import EventSubscription from '../models/user.js';
import Survey from '../models/survey.js';
import User from '../models/user.js';
import 'dotenv/config';

export const events = new Event(process.env.MONGO_URL);		// Event Manager Instance
export const eventsubscriptions = new EventSubscription(process.env.MONGO_URL);		// User Manager Instance
export const users = new User(process.env.MONGO_URL);		// User Manager Instance
export const suvery = new Survey(process.env.MONGO_URL);	// survey Manager Instance
