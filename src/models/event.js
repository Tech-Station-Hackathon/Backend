import MongoManager from '../dao/mongoManager.js';
import { ObjectId } from 'mongodb';

export default class Event{ 
	constructor(file = null, db = 'hackathon') {
		this.db = new MongoManager(file, db, 'events');
	}

	// return all events
	getAllEvents(){
		return this.db.readData();
	}

	// create new event
	addEvent(title, description, thumbnail, stream, date, isOnline, isPresential){
		let newEvent = {
			title,
			description,
			thumbnail,
			stream,
			date,
			isOnline,
			isPresential
		};

		return this.db.writeData(newEvent);
	}

	// edit event
	modifyEvent(eventID,data){
		return this.db.updateData(data,{_id:eventID});
	}


	// delete event
	removeEventById(eventID){
		this.db.deleteByID(ObjectId(eventID));
	}

	// get event by id
	getEventByID(eventID){
		return this.db.readDataByID(ObjectId(eventID));
	}
}