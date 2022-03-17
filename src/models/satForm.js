import MongoManager from '../dao/mongoManager.js';

export default class satForm{
	constructor(file = null, db = 'hackathon') {
		this.db = new MongoManager(file, db, 'satForms');
	}

	// return all satisfaction forms
	getAllsatForms(){
		this.db.readData()
			.then(data => {
				return data;
			})
			.catch( err => {
				return err;
			});
	}

	// create new satisfaction form
	addSatForm (name, lastname,email,idEvent,txtfeedback,cmbSat,cmbRate,cmbRecomm){
		let satform = {
			name,
			lastname,
			email,
			idEvent,
			txtfeedback,
			cmbSat, 
			cmbRate, 
			cmbRecomm

		};

		return this.db.writeData(satform);
	}

	

	// get satisfaction form by Event ID
	getsatFormByEmail(idEvent){
		return this.db.readDataByFilter({idEvent});
	}
}