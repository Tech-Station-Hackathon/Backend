import MongoManager from '../dao/mongoManager.js';

export default class Survey {
	constructor(file = null, db = 'hackathon') {
		this.db = new MongoManager(file, db, 'satForms');
	}

	// return all surveys
	getAllSurveys(){
		this.db.readData()
			.then(data => {
				return data;
			})
			.catch( err => {
				return err;
			});
	}

	// add survey
	addSurvey (name, lastname, email, idEvent, feedback, cmbSat, cmbRate,  cmbRecomm){
		let satform = {
			name,
			lastname,
			email,
			idEvent,
			feedback,
			cmbSat, 
			cmbRate, 
			cmbRecomm

		};

		return this.db.writeData(satform);
	}
}