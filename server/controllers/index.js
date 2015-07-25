var bluebird = require('bluebird');
var db = require('../db');
var models = require('../models');
messagesModels  = bluebird.promisifyAll(models.messages);
usersModels  = bluebird.promisifyAll(models.users);
roomsModels  = bluebird.promisifyAll(models.rooms);


// /classes/messages
module.exports = {
  messages: {
    get: function (req, res) {
      
      var getUsersAsync = function(message){
        return usersModels.getAsync(message['uid'])
            .then(function(users) {
              message["username"] = users[0].username;
              return message;
            });
      };
      var getRoomsAsync = function(message){
        return roomsModels.getAsync(message['rid'])
          .then(function (rooms){
            message["room"] = rooms[0].roomName;
            return message;
          })
      };

      messagesModels.getAsync()
        .map(function(message){
          return getUsersAsync(message).then(getRoomsAsync);
        }).then(function(messages){
          res.writeHead(200, headers);
          res.end(JSON.stringify(messages));            
        });
    }, 

    post: function (req, res) {
      var mesageBody = {
        message: req.body.message,
      };
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

      models.rooms.get(req.body.roomName, function(err, result){});
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
  'Content-Type': "application/json"
};