const db = require('../db').dbConnection;
const Promise = require('bluebird');

// MODELS
// MODELS
// MODELS
// MODELS
// MODELS

module.exports = {
  messages: {
    // a function which produces all the messages
    get: (callback) => {
      db.query('SELECT message FROM messages', (err, results) => {
        if (err) {
          throw err;
        } else {
          callback(null, results);
        }
      });
    },
    // a function which can be used to insert a message into the database
    post: (message, callback) => {
      let user = message.username;
      let text = message.text;
      let room = message.roomname;

      db.query(`INSERT INTO messages (message, user, room) VALUES ("${text}", "${user}", "${room}");`, (err) => {
        if (err) {
          console.error(err);
        } else {
          callback();
        }
      });
    }
  }
  // users: {
  //   get: function () {},
  //   post: function () {}
  // }
};