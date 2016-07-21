var express = require('express');
var requestIp = require('request-ip');
var useragent = require('useragent');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function (req, res) {
    var os = req.headers["user-agent"].split("(")[1].split(")")[0];
    
	var info = {
		ipaddress: requestIp.getClientIp(req),
		language: req.headers["accept-language"].split(",")[0],
		software: os//useragent.parse(req.headers['user-agent']).os.family
	};
	res.json(info);
});

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});