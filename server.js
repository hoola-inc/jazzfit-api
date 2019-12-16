'use strict'
const express = require('express');
const compression = require('compression');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const multer = require('multer');
const env = require('dotenv');
const app = express();
const winston = require('winston');
const cool = require('cool-ascii-faces');

// init env var
env.config();

// providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors());

app.use(compression());

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help! 
// DOC: https://helmetjs.github.io/
app.use(helmet());

// HTTP request logger middleware
app.use(morgan('dev'));

// setup the winston stream 
// app.use(morgan('combined', { "stream": winston.stream.write }));

// default route
app.get("/", (req, res, next) => {
    return res.status(200).json({ message: "Welcome to JazzFit Api", cheers: cool() });
});

// import all routes at once
require('./src/utilities/routes.utils')(app);

// logger 
require('./src/config/logger.config');

const publicDir = require('path').join(__dirname, './public/img');
app.use(express.static(publicDir));

// Handling non-existing routes
require('./src/utilities/error-handler.utils')(app);

// db config
require('./src/config/db.config');


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`%s Server is listening on port ${port}`, chalk.green('✓'));
});

module.exports = {
    app: app
}; // for testing