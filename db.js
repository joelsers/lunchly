/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://joelser:joelser123@localhost:5432/lunchly");

db.connect();

module.exports = db;
