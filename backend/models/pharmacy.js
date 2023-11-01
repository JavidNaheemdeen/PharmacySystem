const mongoose = require("mongoose");


const pharmacySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: false,
	},
	town: {
		type: String,
		required: false,
	},
	logo: {
		type: String,
		required: false,
		default: "https://res.cloudinary.com/dfmnpw0yp/image/upload/v1679235307/assets/tsuh9f6v1reihgqxwxrz.ico",
	},
	contact: {
		type: String,
		required: false,
	},
	opentime: {
		type: String,
		required: false,
	},
	password: {
		type: String,
		required: false,
	},
});

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);

module.exports = Pharmacy;
