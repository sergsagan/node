/**
 * Created by martynuk on 05.11.15.
 */

var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function  run() {
	var david = new User("David");
	var jhon = new User("Jhon");

	david.hello(jhon);

	log(db.getPhrase("Run successful"));
}

if (module.parent){
	exports.run = run;
} else {
	run();
}