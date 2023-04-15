const express = require('express');
const app = express();
require('dotenv').config({ path: '.env' });
require("./connection/connection");
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const route = require("./routes/user.routes");
app.use(bodyParser.json());
const port = process.env.PORT;
const host = process.env.BASE_URL;
mongoose.set('strictQuery', false);

app.post('/webhook', (req, res) => {
  const message =  "vikas";
  const sender = req.body;
console.log("req.body",req.body)
axios.post('https://watzapixyz.herokuapp.com/api/sendMessage', {
  "api_key": "t8o8aP9tIBM6PLapJuj2KzJ5teiBbg",
  "sender": 919354869926,
  "number": req.body.from,
  "message": req.body.message,
})
  .then(response => {

  })
  .catch(error => {
    // console.log(error);
  });

  res.sendStatus(200);

  
});



app.use('/api',route);
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});