const models = require('../models');
const app = require('../app');
const Promise = require('bluebird');


module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: (req, res) => {
      // app.get('/classes/messages', (req, res) => {
      // });
      // console.log('GET requested');
      let getFromDatabase = Promise.promisify(models.messages.get);
      getFromDatabase((err, response) => {
        if (err) { console.error(err); }
      }).then((messages) => {
        res.send(messages);
        res.end('hi');
      });
    },
    // a function which handles posting a message to the database
    post: (req, res) => {
      app.post('/classes/messages', (req, res) => {
        console.log('req.body', req.body);
        let receivedMessage = req.body;
        let newMessage = {
          username: receivedMessage.username,
          text: receivedMessage.text,
          roomname: receivedMessage.roomname || 'lobby',
          messageId: messages.results.length
        };
        let writeToDatabase = Promise.promisify(models.post);
        writeToDatabase(newMessage.text)
        .then(() => {
          res.end();
        });
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};