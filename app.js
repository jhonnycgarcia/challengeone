require('dotenv').config();
const config = require('./src/config');
const express = require('express');
const path = require('path');


/**
 * Libraries Definitios
 */
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser')

/**
 * Routes Definitions
 */
const apiRoutes = require('./src/routes');

/**
 * Middlewares Definitios
 */


const app = express();

/**
 * Middlewares to use
 */
app.use(logger('dev'));
app.use(cookieParser(config.cookieSecret));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

/**
 * Static folders
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Assignament
 */
app.use(apiRoutes);

module.exports = app;