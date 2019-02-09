require("dotenv").config();
var keys = require("./key.js")

var baseUrl = "http://api.vedicrishiastro.com/v1/";
var userID =  keys.horoscope.id;
var apiKey = keys.horoscope.secret;

var request = require('request');
var http = require('http');



//pulls from database get requst

var getResponse = (resource, data, callback) => {
	var url = baseUrl + resource;
	var auth = "Basic " + new Buffer(userID + ":" + apiKey).toString('base64');
	request(
		{
			url: url,
			headers: {
				"Authorization": auth
			},
			method: "POST",
			form: data
		},
		function(err, res, body) {
			if(!err) {
				if(typeof callback === 'function') {
					return callback(null, body);
				}
			}
			if(typeof callback === 'function') {
				return callback(err);
			}
			console.log('callback not provided properly');
		}
	)

};

var packageNumeroData = (date, month, year, name) => {
    return {
        'day': date,
        'month': month,
        'year': year,
        'name': name
    }

};

var api = {
	numeroCall: (resource, date, month, year, name, callback)=> {
		var data = packageNumeroData(date, month, year, name);
		return getResponse(resource, data, callback);
  }
}


module.exports = api;