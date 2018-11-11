'use strict';

var path = require('path');
require('app-module-path').addPath(path.join(__dirname, 'web_moodules'));

// constent
//const jsonfile = require('jsonfile');
//let content = path.join(__dirname, "data", "content.json");
//let apiDomain = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
//fs.exists(dataUsersPath, function (exists) {
//    console.log("if exists:", exists);
//    if (exists === true) {
//        jsonfile.readFile(dataUsersPath, function (err, dataUser) {
//            if (err) {
//                console.log("error:", err);
//            }
//            if (typeof dataUser === "object" && dataUser instanceof Array) {
//                defDataUsers = dataUser.slice();
//            }
//        });
//    }
//});

var express = require('express');

var app = express();
//var router = express.Router();

// express settings
//app.use(require('body-parser').json());

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


// routing
app.get('*', (req, res) => {
    res.render('index', {
        mode: process.env.NODE_ENV === "production" ? ".min" : "",
        title: 'Page'
    });
    res.end();
});


app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});


module.exports = server;