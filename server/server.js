const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../doc/swagger.json');

const { rootPath } = require('../config/const.config');

const router = express.Router();

/**
 * General config
 * 
 * Swagger configuration
 * CORS and HEADER Configuration
 * 
 */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());

/**
 * API Routes
 * 
 * {}/ticket -> For ticket management
 * 
 */

const ticket = require('../routes/ticket.route');

router.use('/ticket', ticket);

app.use(rootPath, router);



module.exports = app;