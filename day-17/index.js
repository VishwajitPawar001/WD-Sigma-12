const express = require('express');
const app = express();

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app started at port ${PORT}`);
});

// app.get("/apple", (req, res) => {
//     res.send("You contacted apple path");
// });

// app.get("/", (req, res) => {
//     res.send("Hello, I am root");
// });

// app.get("/orange", (req, res) => {
//     res.send("You contacted orange path");
// });

// app.get("*any", (req, res) => {
//     res.send("Page not found");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

app.get('/:username/:id', (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
  res.send(htmlStr);
});

app.get('/search', (req, res) => {
  let { q } = req.query;
  if (!q) {
    return res.send(`<h1> Nothing searched</h1>`);
  }
  res.send(`<h1>These are the search results for query: ${q}</h1>`);
});
