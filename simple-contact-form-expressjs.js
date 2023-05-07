const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input name="name" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" name="email" required>
      <br>
      <label for="message">Message:</label>
      <textarea name="message" required></textarea>
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
    res.json(req.body);
});

app.listen(3000);