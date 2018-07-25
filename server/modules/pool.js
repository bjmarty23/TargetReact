const pg = require('pg');
const url = require('url');
let mongoose = require('mongoose');

let config = {};

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// NEED TO CONNECT MONGO HERE INSTEAD OF POSTGRES//


// the pool will log when it connects to the database
pool.on('connect', () => {
  console.log('Postgesql connected');
});

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;