var controllers = require('./controllers');
var router = require('express').Router();

// /classes/messages
// /classes/users
for (var route in controllers) {
  router.route("/" + route)
    // .options( function(req, res, headers){ 
    //   console.log('OPTIONS RESPONSE');
    //   res.writeHead(200, headers)
    //   res.end('options response');
    // })
    // .options(controllers[route].options)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

