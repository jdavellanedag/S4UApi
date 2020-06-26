const { urlDB } = require('../config/general.config');
const mongoose = require('mongoose');

class Database {

    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(urlDB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, (err, res) => {
            if (err) throw err;
            console.log('DataBase ONLINE');
        })
    }

}

module.exports = new Database();