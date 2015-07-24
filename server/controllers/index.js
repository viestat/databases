var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db')



module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {

      var message = {
        uid: 2,
        rid: 3,
        message: 'HEy!'
      }

      var query  = db.query('INSERT INTO messages SET ?', message, function (err, result){
        if(err){ 
          res.writeHead(400, headers);
          res.end('Failed to POST data. error:' + err); 
        }  
        res.writeHead(201, headers);
        res.end('POST Success!');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};