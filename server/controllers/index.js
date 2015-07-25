var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');



// /classes/messages
module.exports = {
  // options: {
  //   optionsresponse: function(){ console.log('options access-control-allow-methods') }
  // },
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){});

      res.writeHead(200, headers);
      res.end('GET IT');
    }, 

    post: function (req, res) {
      var mesageBody = {
        message: req.body.message,
      };

      // if models.users.get(username) is not null
          // add uid of usernmae to MessageBody
      // else models.users.post(username)
          // add new uid to MessageBody
      models.users.get(req.body.username, function(err, result){
        if(err){ console.log(err); return; }
        if(result.length === 0){
          models.users.post(req.body.username, function(err, result){
            if(result){
              
            }
          });
        }else{
          result
        }
      });

      models.rooms.get(req.body.roomname, function(err, result){});

      // models.messages.post(req.body, function(err, result){
      //   if(err){
      //     res.writeHead(400, headers);
      //     res.end('Failed to POST data. error:' + err); 
      //   }else{
      //     res.writeHead(201, headers);
      //     res.end('POST Success! Result: ', result);
      //   }
      // });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body.username, function(err, result){});
    },
    post: function (req, res) {}
  },

  rooms: {
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