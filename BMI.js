const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
      <title>BMI Calculator</title>
  </head>
  <body>
      <form method="POST" action="/calculate">
          Weight (kg) <input type="number" name="weight">
          <br>
          Height (m) <input type="number" name="height">
          <br>
          <input type="submit" value="Calculate">
      </form>
  </body>
  </html>`);
});

app.post('/calculate', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / (height*height);

  res.send("Your BMI is " + bmi);
});

app.listen(3000);