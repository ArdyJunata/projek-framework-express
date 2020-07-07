const express = require('express'),
  bodyParser = require('body-parser'),
  user = require('./routes/userRoutes'),
  cors = require('cors'),
  upload = require('express-fileupload');

const app = express()

app.use(express.json());
app.use(upload());

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const options = {
  'Access-Control-Allow-Methods': 'PATCH,GET,PUT,POST,DELETE',
  'Access-Control-Allow-Origin': '*'
}

app.use(cors(options))

app.use('/user', user)

app.listen(process.env.PORT || `3000`, () => {

  console.log(`Server is running on port: ${process.env.PORT || `3000`}`)

})