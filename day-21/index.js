const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'my_app',
  password: 'mysql',
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = 'INSERT INTO user (id, username, email, password) VALUES ?';
let data = [];

for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
}

try {
  connection.query(q, [data], function (err, results) {
    if (err) throw err;
    console.log(results);
  });
} catch (err) {
  console.log(err);
}

connection.end();

console.log(getRandomUser());

app.get('/', (req, res) => {
  res.send('Welcome to home page');
});

app.listen('5000', () => {
  console.log('server is running');
});
