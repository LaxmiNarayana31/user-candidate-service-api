const mysql = require('mysql2');
const config = require('../config/config');

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME
});

const promisePool = pool.promise();

module.exports = promisePool;
