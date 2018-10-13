var db = require('../db').dbConnection;

module.exports = {
  messages: {
    get: () => {
      // a function which produces all the messages
      db.query('SELECT message FROM `messages`', (err, results) => {
        if (err) {
          console.error(err);
        } else {
          console.log(results);
          return results;
        }
      });
      // console.log('Hi Model Get DB');
    },
    // a function which can be used to insert a message into the database
    post: (message) => {      
      db.query('INSERT INTO `messages` (`message`, `userID`, `roomID`) VALUES (`${message}`, 1, 1)', (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Message inserted!');
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

