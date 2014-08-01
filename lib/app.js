var express = require('express');
var utils = require('./utils');
var Common = require(global.__commonModule);
var User = Common.models.user;

var app = express();
exports = module.exports = app;

app.use(express.bodyParser());

// sample
// public info
app.get('/userinfo', function (req, res, next) {
  var username = req.user.userId;
  User.findOne({username: username}, function (err, user) {
    if (err) {
      return next(err);
    }
    var ret = {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.displayName,
    };
    res.json(ret);
  });
});

// get the emails
app.get('/emails', function (req, res, next) {
  var username = req.user.userId;

  // TODO handling scope, its not yet implemented in OAuthn module
  // var scopes = utils.convertScope(req.user.scope);
  // if (-1 === scopes.indexOf('profile')) {}
  User.findOne({username: username}, function (err, user) {
    if (err) {
      return next(err);
    }
    var ret = {
      primaryEmail: user.primaryEmail,
      emailList: user.emailList,
    };
    res.json(ret);
  });
});

