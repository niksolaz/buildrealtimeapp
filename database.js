// database.js
var mongoose = require('mongoose');

var mongoAddress = process.env.MONGO_ADDRESS_REAL_TIME_APP || '127.0.0.1'; // e.g. 127.0.0.1
var mongoAddressPort = process.env.MONGO_ADDRESS_PORT_REAL_TIME_APP || 27017; // e.g. 27017
var mongoColletion = process.env.MONGO_COLLECTION_REAL_TIME_APP || 'react-tweets'; // e.g. smsl_frontend/myLogin
var mongoAddressScheme = "mongodb://";
var mongoURI = mongoAddressScheme + mongoAddress + ":" + mongoAddressPort + "/" + mongoColletion;

module.exports = {
    'url' : mongoURI
};