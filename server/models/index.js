var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', undefined, function(err, result){
        callback(err, result);
      });
    },
    post: function (data, callback) {
      var query  = db.query('INSERT INTO messages SET ?', data, function (err, result){
        callback(err, result);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (username, callback) {
      return db.query('SELECT id FROM users WHERE username = ?', username, function (err, result){
        callback(err, result);
      });

    },
    post: function (username, callback) {
      var query  = db.query('INSERT INTO users SET ?', {'username': username}, function (err, result){
        // result
          // { fieldCount: 0,
          //   affectedRows: 1,
          //   insertId: 2,
          //   serverStatus: 2,
          //   warningCount: 0,
          //   message: '',
          //   protocol41: true,
          //   changedRows: 0 }

        callback(err, result);

      });
    }
  }
};

