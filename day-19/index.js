const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/ig/:username', (req, res) => {
  let { username } = req.params;
  const instaData = require('./data.json');
  const data = instaData[username];
  //   console.log(data);
  if (data) {
    res.render('users.ejs', { data });
  } else {
    res.render('error.ejs');
  }
});

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
