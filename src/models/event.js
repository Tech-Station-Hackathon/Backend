import bcrypt from 'bcrypt';
import MongoManager from '../dao/mongoManager.js';

export default class Event{ 
	constructor(file = null, db = 'hackathon') {
		this.db = new MongoManager(file, db, 'events');
	}

	// return all events
	getAllEvents(){
		this.db.readData()
			.then(data => {
				return data;
			})
			.catch( err => {
				return err;
			});
	}

	// create new event
	addEvent(event, description, date, online, presential){
		let newEvent = {
            event,
			description,
			date,
			online,
			presential
		};

		return this.db.writeData(newEvent);
	}

    	// edit event

	 modifyEvent(eventID){

        this.getEventByID(eventID){
            let modEvent ={
            event,
			description,
			date,
			online,
			presential

        };

        return this.db.writeData(modEvent);

    };

	};


	// delete event
	removeEventById(eventID){
		this.db.deleteByID(eventID);
	}

	// get event by id
	getEventByID(eventID){
		return this.db.readDataByID(eventID);
	}
}