const { port } = require('./config/general.config');
const app = require('./server/server');
const db = require('./server/db');

app.listen(port, () => {
    console.log(`Escuchando por puerto: ${port}`);
})