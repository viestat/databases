var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(err, result){
        if(err){ console.log('error on GET from messages table: ', err); }
        if(callback){ callback(undefined, result); }
      });
    },
    post: function (data, callback) {
      var query  = db.query('INSERT INTO messages SET ?', data, function (err, result){
        if(err){ console.log('error on POST to messages table: ', err); }
        if(callback){ callback(err, result); }
      });
    }
  },

  users: {
    get: function (uid, callback) {
      return db.query('SELECT username FROM users WHERE id = ?', [uid], function (err, result){
        if(err){ console.log('error on GET from users table: ', err); }
        if(callback){ callback(undefined, result); }
      });

    },
    post: function (username, callback) {
      var query  = db.query('INSERT INTO users SET ?', {'username': username}, function (err, result){
        if(err){ console.log('error on POST to users table: ', err); }
        if(callback){ callback(err, result); }
      });
    }
  },

  rooms: {
    // Ditto as above.
    get: function (rid, callback) {
      return db.query('SELECT roomName FROM rooms WHERE id = ?', [rid], function (err, result){
        if(err){ console.log('error on GET from rooms table: ', err); }
        if(callback){ callback(undefined, result); }
      });

    },
    post: function (roomName, callback) {
      var query  = db.query('INSERT INTO rooms SET ?', {'roomName': roomName}, function (err, result){
        // result
          // { fieldCount: 0,
          //   affectedRows: 1,
          //   insertId: 2,
          //   serverStatus: 2,
          //   warningCount: 0,
          //   message: '',
          //   protocol41: true,
          //   changedRows: 0 }
        if(err){ console.log('error on POST to rooms table: ', err); }
        if(callback){ callback(err, result); }
      });
    }
  }
};

