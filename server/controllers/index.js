const models = require('../models');
const Promise = require('bluebird');

// CONTROLLER
// CONTROLLER
// CONTROLLER
// CONTROLLER
// CONTROLLER

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: (req, res) => {
      let getFromDatabase = Promise.promisify(models.messages.get);
      getFromDatabase((err, message) => {
        if (err) {
          throw err;
        } else {
          res.send(message);
          res.end();
        }
      });
    },
    // a function which handles posting a message to the database
    post: (req, res) => {
      let newMessage = {
        username: req.body.username,
        text: req.body.text,
        roomname: req.body.roomname || 'lobby',
      };
      let writeToDatabase = Promise.promisify(models.messages.post);
      writeToDatabase(newMessage, (err) =>{
        if (err) {
          throw err;
        } else {
          res.end('Message Sent!');
        }
      });

    }
  }
  // users: {
  //   // Ditto as above
  //   get: function (req, res) {},
  //   post: function (req, res) {}
  // }
};