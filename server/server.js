const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../doc/swagger.json');

const { rootPath } = require('../config/const.config');

const router = express.Router();

// General config

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes

const ticket = require('../routes/ticket.route');

router.use('/ticket', ticket);

app.use(rootPath, router);

module.exports = app;