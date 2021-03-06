import MongoManager from '../dao/mongoManager.js';
import {ObjectId} from 'mongodb';

export default class EventSubscription {
	constructor(file = null, db = 'hackathon') {
		this.db = new MongoManager(file, db, 'eventsubscriptions');
	}

	// add eventsubscription
	addEventSubscription (eventId,userId,accessType){
		let eventsubscription = {
			eventId,
			userId,
			accessType
		};

		return this.db.writeData(eventsubscription);
	}

	// get EventSubscription by Eventid
	getEventSubscriptionByID(eventId){
		return this.db.readDataByFilter({eventId: ObjectId(eventId)});
	}
}