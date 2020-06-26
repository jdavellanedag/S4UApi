const { port } = require('./config/general.config');
const app = require('./server/server');
const db = require('./server/db');

/**
 * Start server
 * 
 */
app.listen(port, () => {
    console.log(`Server started, listening port: ${port}`);
})