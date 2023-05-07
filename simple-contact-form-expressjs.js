const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      Name: <input name="name" required>
      <br>
      Email: <input type="email" name="email" required>
      <br>
      Message: <textarea name="message" required></textarea>
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
    res.json(req.body);
});

app.listen(3000);