const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
  {
    username: 'apnacollege',
    content: 'I love coding!',
  },
  {
    username: 'vishwajit',
    content: 'Hard work is important to achieve success',
  },
  {
    username: 'mahesh',
    content: 'I got my first internship',
  },
  {
    username: 'rohit',
    content: 'I love coding!',
  },
];

app.get('/posts', (req, res) => {
  res.render('index.ejs', { posts });
});

app.get('/posts/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/posts', (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect('/posts');
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
