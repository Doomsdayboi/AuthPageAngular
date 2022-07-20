//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-app-heroku'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/angular-app-heroku/' }),
);

const cors = require("cors");
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.use(cors(corsOptions)) // Use this after the variable declaration
