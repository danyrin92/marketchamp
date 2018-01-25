"use strict";

let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let mongo_uri = "mongodb://localhost/starterdb";//process.env.MONGODB_URI;
let port = process.env.PORT || 3000;

let User = require('./models/user');

// Connect to Mongoose
mongoose.connect(mongo_uri);
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api');
});

app.get('/api/users', function(req, res){
	User.getUsers(function(err, users){
		if(err) {
			throw err;
		}
		res.json(users);
	});
});

app.get('/api/users/:_id', function(req, res){
	User.getUserById(req.params._id, function(err, user){
		if(err) {
			throw err;
		}
		res.json(user);
	});
});

app.listen(port);
console.log('Running marketchamp on port 3000...');