process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/db_s4uapp'
} else {
    urlDB = process.env.MONGO_URI
}

module.exports = {
    port: process.env.PORT || 3000,
    urlDB
}