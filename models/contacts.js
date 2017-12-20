var mongoose = require('mongoose');



var contactSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	phone:{
		type: String,
		required: true
	}
});

 var Contact = module.exports = mongoose.model('Contact', contactSchema);