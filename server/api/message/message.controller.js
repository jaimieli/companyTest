'use strict';

var _ = require('lodash');
var Message = require('./message.model');
var request = require('request');


// send slack message
exports.sendMessage = function(req, res){
  var domain = "fullstackacademy";
  // var token = "xoxp-2151814398-2493693972-2764382274-7e1ff3";
  var payload = req.body;

  var body = {
    "text": payload.text,
    "channel": payload.user,
    "username": "companyCultureApp"
  };

  var subdomain = 'fullstackacademy';
  var token = 'MXo6yuIBqS35l26ssF1D30ZA';

  request({
    url: 'https://' + subdomain + '.slack.com/services/hooks/incoming-webhook?token=' + token,
    method: 'POST',
    body: JSON.stringify(body)
  }, function(err, body, response) {
    console.log(body);
    res.send('sent message');
  })
}

// Get list of messages
exports.index = function(req, res) {
  Message.find(function (err, messages) {
    if(err) { return handleError(res, err); }
    return res.json(200, messages);
  });
};

// Get a single message
exports.show = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    return res.json(message);
  });
};

// Creates a new message in the DB.
exports.create = function(req, res) {
  Message.create(req.body, function(err, message) {
    if(err) { return handleError(res, err); }
    return res.json(201, message);
  });
};

// Updates an existing message in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Message.findById(req.params.id, function (err, message) {
    if (err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    var updated = _.merge(message, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, message);
    });
  });
};

// Deletes a message from the DB.
exports.destroy = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    message.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}