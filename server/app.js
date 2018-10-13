const express = require('express');
const db = require('./db');

// Middleware
const morgan = require('morgan');
const parser = require('body-parser');

// Router
const router = require('./routes.js');

const app = express();
module.exports = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
//app.use(parser.json({ type: 'application/*+json' }));
//app.use(bodyParser.json());
// Set up our routes
app.use('/classes', router);

// Serve the client files
// app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

