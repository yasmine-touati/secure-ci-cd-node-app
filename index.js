require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;


const secret = process.env.APP_SECRET || 'default-secret';

app.use(helmet());
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/secret', (req, res) => {
  res.send(`<h1>Shhh</h1><p>The secret is: ${secret}</p>`);
});

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
